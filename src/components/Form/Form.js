import React from "react";

// function Form() {
//     return (
//         <form onSubmit={handlerSubmit}>
//             <button onClick={handlerButton} >Click me!</button>
//         </form>
//     )
// }

class Form extends React.Component {
  handlerButton = () => console.log("Click");
  handlerSubmit = (event) => event.preventDefault();

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <button onClick={this.handlerButton}>Click me!</button>
      </form>
    );
  }
}

export default Form;
