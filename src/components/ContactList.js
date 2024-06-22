import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
        selectContactHandler={props.selectContactHandler}
      />
    );
  });

  return (
    <div className="main">
      <h2>Patient List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Contacts"
          value={props.term}
          onChange={(e) => props.searchKeyword(e.target.value)}
        />
      </div>
      <Link to="/add">
        <button className="add-patient-btn">
          <i className="icon plus"></i> Add Contact
        </button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
