import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (probs) => {
  const { id, Name, Email } = probs.contact;
  console.log("id is ", id);

  return (
    <div className="item" key={id}>
      <img className="ui avtar image" src={user} alt="this pic of user" />
      <div className="content">
        <Link to={`/contact/${id}`}>
          <div className="header">{Name}</div>
          <div>{Email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => probs.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
