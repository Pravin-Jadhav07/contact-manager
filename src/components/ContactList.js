import React from "react";
import "./ContactList.css";
import ContactCard from "./ContactCard";

function ContactList(props) {
  console.log(props);
  const reanderContactList = props.contacts.map((contact) => {
    return(
      <>
        <ContactCard contact={contact} />
      </>
    );
  });

  return (
    <div className="cList">
      <h2>Contact List : </h2>
      <div className="allContacts">{reanderContactList}</div>
    </div>
  );
}

export default ContactList;