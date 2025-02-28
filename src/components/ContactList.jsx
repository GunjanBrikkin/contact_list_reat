import ContactCard from "../components/ContactCard";

const ContactList = (probs) => {
  console.log(probs);

  const deleteConactHandler = (id) => {
    probs.getContactId(id);
  };

  const contacts = [
    {
      id: "1",
      Name: "Gunjan",
      Email: "gunjan@gmail.com",
    },
  ];

  const renderContactList = contacts.map((contact) => {
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
        <button className="ui button blue right">Add Contact</button>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
