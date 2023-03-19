import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Footer from './components/Footer';

function App() {
  const [ contacts , setContacts ] = useState( [] );
  const addContactHandler = (contact) =>{
      setContacts( [...contacts, contact] );
  }
  return (
    <div className="App">
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      <Footer/>
    </div>
  );


}

export default App;
