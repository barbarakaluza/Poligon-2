import React from "react";

function Input({ value, name, placeholder, handleChange }) {
    return (
        <input 
        className="form-input-area"
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        >
        </input>
    )
}

export default Input;