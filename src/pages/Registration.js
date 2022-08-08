import React from "react";

import { Form, Input } from "../components/Form";

// function useInput(initialValue = " ") {
//   const [value, setValue] = useState(" ");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return [value, handleChange];
// }



// function Registration() {

//     const [name, handleNameChange] = useInput(" ");
//     const [surname, handleSurnameChange] = useInput(" ");
//     const [age, handleAgeChange] = useInput(" ");
//     const [city, handleCityChange] = useInput(" ");
//     const [sex, handleSexChange] = useInput(" ");
//     const surnameInput = useRef();

  

//   const handlerButton = () => console.log("Click");
//   const handleSubmit = (event) => event.preventDefault();
//   const handleFocusClick = () => {
//     surnameInput.current.focus();
//     surnameInput.current.style.border = "#f00 1px solid"
//   };
  
//     return (
//       <div>
//         <div>
//           <p>Name:{name}</p>
//           <p>Surname:{surname}</p>
//           <p>Age:{age}</p>
//           <p>City:{city}</p>
//           <p>Sex:{sex}</p>
//         </div>
//         <Form handleSubmit={handleSubmit}>
//            <h3>Put your data:</h3>
//          <label htmlFor="name" className="form-input">Name</label>
//            <Input className="form-input-area" type="text" value={name} name="name" placeholder="name" handleChange={handleNameChange}></Input>

//          <label htmlFor="surname" className="form-input">Surname  </label> 
//            <Input className="form-input-area" ref={surnameInput} type="text" value={surname} name="surname" placeholder="surname" handleChange={handleSurnameChange}></Input>
      
//          <label htmlFor="age" className="form-input">Age</label>
//            <Input className="form-input-area" type="text" value={age} name="age" placeholder="age" handleChange={handleAgeChange}></Input>
        
//         <label htmlFor="city" className="for-input">City</label>
//           <Input className="form-input-area" type="text" value={city} name="city" placeholder="city" handleChange={handleCityChange}></Input>

//         <label htmlFor="sex" className="form-input">Sex</label>
//            <Input className="form-input-area" type="text" value={sex} name="sex" placeholder="sex" handleChange={handleSexChange}></Input>
        
//          <button className="form-button" onClick={handlerButton}>Save</button>
//          <button type="button" onClick={handleFocusClick}>Focus</button>
//          <p>Thank you!</p>
//         </Form>
//         </div>
//     )
// }

class Registration extends React.Component {

  state = {
    name: "",
    surname: "",
    age: "",
    city: "",
    sex: ""
  };

  constructor(props) {
    super(props);
    this.surnameInput = React.createRef();
  };

  componentDidMount() {
    console.log("componentDidMount")
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
  };

  componentWillUnmount() {
    console.log("componentWillUnmount")
  };

  handlerButton = () => console.log("Click");

  handleSubmit = (event) => event.preventDefault();

  handleChange = (event) => {
    const keyName = event.target.name;
    this.setState({ [keyName]: event.target.value })
  }

  handleFocus = () => {
    this.surnameInput.current.focus();
    this.surnameInput.current.style.border = "#f00 1px solid"
  };

  render() {
    return (
        <div>
      <Form handleSubmit={this.handleSubmit}>
        <h3>Put your data:</h3>
        <label htmlFor="name" className="form-input">Name</label>
          <Input name="name" placeholder="name" value="name" handleChange={this.handleChange}></Input>

        <label htmlFor="surname" className="form-input">Surname  </label>
          <Input ref={this.surnameInput} name="surname" value="surname" placeholder="surname" onChange={this.handleChange}></Input>
      
        <label htmlFor="age" className="form-input">Age</label>
          <Input name="age" placeholder="age" value="age" handleChange={this.handleChange}></Input>
        
        <label htmlFor="city" className="for-input">City</label>
          <Input name="city" placeholder="city" handleChange={this.handleChange}></Input>

        <label htmlFor="sex" className="form-input">Sex</label>
          <Input name="sex" placeholder="sex" value="sex" handleChange={this.handleChange}></Input>
        
        <button className="form-button" type="submit" onClick={this.handlerButton}>Save</button>
        <button type="button" onClick={this.handleFocus}>Focus</button>
        <p>Thank you!</p>
      </Form>
      </div>
    );
  }
}

export default Registration;
