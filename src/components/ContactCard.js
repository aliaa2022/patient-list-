import React from "react";
import user from "../assets/images/user.png"; // Corrected path
import user2 from "../assets/images/user2.png"; // Corrected path

const ContactCard = (props) => {
  const { id, name, age, gender, email } = props.contact;
  console.log('Contact:', props.contact); // Log contact data
  const userImage = gender && gender.toLowerCase() === "f" ? user2 : user;
  console.log('Selected image:', userImage); // Log selected image

  return (
    <div className="item" onClick={() => props.selectContactHandler(props.contact)}>
      <img className="ui avatar image" src={userImage} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{age}, {gender}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          props.clickHandler(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
