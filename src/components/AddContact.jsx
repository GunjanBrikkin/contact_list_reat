import React from "react";
import PropTypes from "prop-types";

class AddContact extends React.Component {
  state = {
    Name: "",
    Email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.Name == "" || this.state.Email == "") {
      alert("all the fields are mentatroy !!");
      return;
    }
    this.props.addContactHandler(this.state); // calling the function addContactHandler and passing the state as a probs
    this.setState({ Name: "", Email: "" });
    // this.props.history.push("/")
   
  };

  render() {
    return (
      <div className="ui main">
        <h2 style={{ marginTop: "50px" }}>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter the name please !"
              value={this.state.Name}
              onChange={(e) => this.setState({ Name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter the email please !"
              value={this.state.Email}
              onChange={(e) => this.setState({ Email: e.target.value })}
            ></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

// Define PropTypes for props validation
AddContact.propTypes = {
  addContactHandler: PropTypes.func.isRequired,
};

export default AddContact;
