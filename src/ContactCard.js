import React from "react";
import avatar from "./images/avatar.png"; // Ensure the avatar image is available in the correct path

const ContactCard = (props) => {
  const { id, name, age, gender, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={avatar} alt="avatar" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{age}, {gender}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
