import ContactCard from "../components/ContactCard";

const ContactList = (probs) => {
  console.log(probs);
  const renderContactList = probs.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact}></ContactCard>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
