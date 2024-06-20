import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const selectContactHandler = (contact) => {
    props.selectContactHandler(contact);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        selectContactHandler={selectContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>Contact List</h2>
      <div className="ui celled list">{renderContactList}</div>
      <Link to="/add">
        <button className="ui button blue add-contact">Add Contact</button>
      </Link>
    </div>
  );
};

export default ContactList;
