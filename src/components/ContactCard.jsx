import user from "../images/user.png";

const ContactCard = (probs) => {
  const { id, Name, Email } = probs.contact;

  return (
    <div className="item" key={id}>
      <img className="ui avtar image" src={user} alt="this pic of user" />
      <div className="content">
        <div className="header">{Name}</div>
        <div>{Email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
