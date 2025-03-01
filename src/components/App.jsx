import "./App.css";
import Header from "../components/Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetail from "../components/ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log("contact", contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeConatctList = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // Load contacts from localStorage when the component mounts
  useEffect(() => {
    const retriveContacts =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    if (retriveContacts.length > 0) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeConatctList}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeConatctList} /> */}
      </Router>
    </div>
  );
}

export default App;
