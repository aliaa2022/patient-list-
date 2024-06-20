import React from "react";
import user from "./images/user.png";
import user2 from "./images/user2.png";

const ContactCard = (props) => {
  const { id, name, age, gender, email } = props.contact;
  const userImage = gender.toLowerCase() === "f" ? user2 : user;

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
          props.clickHander(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
