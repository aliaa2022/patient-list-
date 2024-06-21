import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import MedicalProfile from "./MedicalProfile";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [vitalSigns, setVitalSigns] = useState({
    heartRate: 75,
    bodyTemp: 36.5,
    blood: "90/60",
  });

  const addContactHandler = (contact) => {
    const newContact = { id: uuidv4(), ...contact };
    const newContactList = [...contacts, newContact];
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  const selectContactHandler = (contact) => {
    setSelectedContact(contact);
  };

  const closeContactHandler = () => {
    setSelectedContact(null);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="main-content">
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                  selectContactHandler={selectContactHandler}
                />
                {selectedContact && (
                  <div className="detail-section">
                    <ContactDetail
                      contact={selectedContact}
                      onClose={closeContactHandler}
                    />
                    <MedicalProfile vitalSigns={vitalSigns} />
                  </div>
                )}
              </div>
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
