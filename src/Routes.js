// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import MedicalProfile from './components/MedicalProfile';

const AppRoutes = ({ contacts, searchResults, searchTerm, removeContactHandler, selectContactHandler, closeContactHandler, searchHandler, selectedContact, vitalSigns, addContactHandler }) => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <div className="main-content">
            <ContactList
              contacts={searchTerm.length < 1 ? contacts : searchResults}
              getContactId={removeContactHandler}
              selectContactHandler={selectContactHandler}
              term={searchTerm}
              searchKeyword={searchHandler}
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
  );
};

export default AppRoutes;
