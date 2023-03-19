import React from "react";
import "./AddContact.css";

class AddContact extends React.Component{
  state={
    name : "",
    email: "",
  };
  add = (e) => {
      e.preventDefault();
      if(this.state.name === "" || this.state.email === "" ){
        alert("all the fields are mendatory");
        return;
      }
      this.props.addContactHandler(this.state);
      this.setState({ name:"", email:"" });
  }

render(){
  return(
    
    <form className="cForm" onSubmit={this.add}>
      <h2 className="center">Add Contact</h2>
      <div>
        <label className="cLabel">Name</label>
        <input
          type="text"
          className="cField"
          placeholder="Enter Name"
          value={ this.state.name }
          onChange={ (e) => this.setState( { name: e.target.value } ) }
        ></input>
      </div>
      <div>
        <label className="cLabel">Email</label>
        <input
          type="email"
          className="cField"
          placeholder="Enter Name"
          value={ this.state.email }
          onChange={ (e) => this.setState( { email: e.target.value } ) }
        ></input>
      </div>

      <button className="btn">Add</button>
    </form>
  );
}
}
export default AddContact;
