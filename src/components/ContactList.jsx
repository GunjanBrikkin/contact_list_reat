import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

const ContactList = (probs) => {
  console.log("probs in ContactList",probs);

  const deleteConactHandler = (id) => {
    probs.getContactId(id);
  };

  const renderContactList = probs.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteConactHandler}
      ></ContactCard>
    );
  });
  return (
    <div className="main">
      <h2 style={{ marginTop: "50px" }}>
        Contact List
        <Link to="/add">
          <button
            className="ui button blue right"
            style={{ marginLeft: "125px" }}
          >
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
