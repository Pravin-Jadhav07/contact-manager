import React from "react";
import "./ContactCard.css";
import user from "../images/user.png";
import "./ContactList.css";

function ContactCard(props){
  const { id, name, email } = props.contact;
   return (
    <div className="contact">
      <img className="user" src={user} alt="user img" />

      <div className="name">
        {name}
        <span className="iConU">update</span>
      </div>
      <div className="email">
        {email}
        <span className="iConD">delete</span>
      </div>
    </div>
  );
};

export default ContactCard;
