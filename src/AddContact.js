import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    age: "",
    gender: "",
    email: "",
  };

  validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.age === "" || this.state.gender === "" || this.state.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    if (!this.validateEmail(this.state.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", age: "", gender: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Patient</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Age</label>
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={this.state.gender}
              onChange={(e) => this.setState({ gender: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
