import React from "react";
import user from "../assets/images/user.png"; // Corrected path
import user2 from "../assets/images/user2.png"; // Corrected path

const ContactDetail = ({ contact, onClose }) => {
  const { name, age, gender, email } = contact;
  
  // Determine the user image based on gender
  const userImage = gender && gender.toLowerCase() === "f" ? user2 : user;

  return (
    <div className="contact-detail">
      <div className="ui card centered">
        <div className="image">
          <img src={userImage} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">Age: {age}</div>
          <div className="description">Gender: {gender}</div>
          <div className="description">Email: {email}</div>
        </div>
        <i
          className="close icon"
          style={{ color: "red", cursor: "pointer" }}
          onClick={onClose}
        ></i>
      </div>
    </div>
  );
};

export default ContactDetail;
