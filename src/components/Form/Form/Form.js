import React from "react";

import "../style.css";

function Form({handleSubmit, children}){
  return (
    <form class-name="form" onSubmit={handleSubmit}>
        {children}
    </form>
  )
}

export default Form;