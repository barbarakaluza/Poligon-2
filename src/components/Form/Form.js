import React from "react";

import "./style.css";

// function Form() {
//     return (
//         <form onSubmit={handlerSubmit}>
//             <button onClick={handlerButton} >Click me!</button>
//         </form>
//     )
// }

class Form extends React.Component {
  state = {
    name: "",
    surname: "",
    age: "",
    city: "",
    sex: ""
  };

  handlerButton = () => console.log("Click");

  handlerSubmit = (event) => event.preventDefault();

  handleChange = (event) => {
    const keyName = event.target.name;
    this.setState({ [keyName]: event.target.value })
  }

  render() {
    return (
      <form className="form" onSubmit={this.handlerSubmit}>
        <h3>Put your data:</h3>
        <label for="name" className="form-input">Name</label>
          <input className="form-input-area" type="text" name="name" placeholder="name" onChange={this.handleChange}></input>

        <label for="surname" className="form-input">Surname  </label>
          <input className="form-input-area" type="text" name="surname" placeholder="surname" onChange={this.handleChange}></input>
      
        <label for="age" className="form-input">Age</label>
          <input className="form-input-area" type="text" name="age" placeholder="age" onChange={this.handleChange}></input>
        
        <label for="city" className="for-input">City</label>
          <input className="form-input-area" type="text" name="city" placeholder="city" onChange={this.handleChange}></input>

        <label for="sex" className="form-input">Sex</label>
          <input className="form-input-area" type="text" name="sex" placeholder="sex" onChange={this.handleChange}></input>
        
        <button className="form-button" onClick={this.handlerButton}>Save</button>
        <p>Thank you!</p>
      </form>
    );
  }
}

export default Form;
