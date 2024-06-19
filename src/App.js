import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const results = contacts.filter(contact =>
      (contact.name && contact.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (contact.age && contact.age.toString().includes(searchTerm)) ||
      (contact.gender && contact.gender.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (contact.email && contact.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSearchResults(results);
  }, [contacts, searchTerm]);

  return (
    <div className="ui container">
      <Header />
      <div className="header">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={searchTerm ? searchResults : contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
