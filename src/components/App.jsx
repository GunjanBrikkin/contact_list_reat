import "./App.css";
import Header from "../components/Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      Name: "Princess Ariel",
      Email: "ariel@gmail.com",
    },
    {
      id: "2",
      Name: "Princess Cinderella",
      Email: "cinderella@gmail.com",
    },
    {
      id: "3",
      Name: "Prince Charming",
      Email: "princecharming@gmail.com",
    },
    {
      id: "4",
      Name: "Prince Gunjan",
      Email: "princegunjan@gmail.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
