import React from "react";
import user from "./images/user.png";
import user2 from "./images/user2.png";

const ContactDetail = ({ contact, onClose }) => {
  const { name, age, gender, email } = contact;
  const userImage = gender.toLowerCase() === "f" ? user2 : user;

  return (
    <div className="contact-detail">
      <div className="ui card centered">
        <i
          className="close icon"
          onClick={onClose}
          style={{ position: "absolute", top: "10px", right: "10px", color: "red", cursor: "pointer", fontSize: "20px", zIndex: "1000" }}
        ></i>
        <div className="image">
          <img src={userImage} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">Age: {age}</div>
          <div className="description">Gender: {gender}</div>
          <div className="description">Email: {email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
