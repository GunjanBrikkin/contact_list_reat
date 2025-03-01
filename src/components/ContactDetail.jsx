import user from "../images/project_boy.jpg";

const ContactDetail = () => {
  return (
    <div className="main" style={{ marginTop: "70px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Gunj</div>
          <div className="description">gunj@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
