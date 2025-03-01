import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for navigation

const AddContact = ({ addContactHandler }) => {
  const [state, setState] = useState({ Name: "", Email: "" });
  const navigate = useNavigate(); // ✅ Correctly use the hook inside a functional component

  const add = (e) => {
    e.preventDefault();
    if (state.Name === "" || state.Email === "") {
      alert("All fields are mandatory!");
      return;
    }

    addContactHandler(state);
    setState({ Name: "", Email: "" });

    navigate("/"); // ✅ Navigate to home page after adding contact
  };

  return (
    <div className="ui main">
      <h2 style={{ marginTop: "50px" }}>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the name please!"
            value={state.Name}
            onChange={(e) => setState({ ...state, Name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email:</label>
          <input
            type="email" // ✅ Changed from text to email for better validation
            name="email"
            placeholder="Enter the email please!"
            value={state.Email}
            onChange={(e) => setState({ ...state, Email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

// ✅ Define PropTypes for validation
AddContact.propTypes = {
  addContactHandler: PropTypes.func.isRequired,
};

export default AddContact;
