import React from "react";

// function Form() {
//     return (
//         <form onSubmit={handlerSubmit}>
//             <button onClick={handlerButton} >Click me!</button>
//         </form>
//     )
// }

class Form extends React.Component {
  state = {
    name: ""
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handlerButton = () => console.log("Click");
  handlerSubmit = (event) => event.preventDefault();
  handleChange = (event) => {
    console.log("input value: ", event.target.value)
    this.setState({ name: event.target.value })
    console.log("name: ", this.name);
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handlerButton}>Click me!</button>
      </form>
    );
  }
}

export default Form;
