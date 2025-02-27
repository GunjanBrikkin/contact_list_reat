import "./App.css";
import Header from "../components/Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState } from "react";

function App() {

  const [contacts,setContacts] = useState([]);

  const addContactHandler = (contacts) => {
    console.log(contacts)
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
