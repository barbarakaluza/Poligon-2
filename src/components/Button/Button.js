import React, { useState } from "react";



const styles = {
    marginBottom: "15px"
}

const colors = {
    red: "#e74c3c",
    emerald: "#2ecc71",
    orange: "#f39c12",
    silver: "#bdc3c7"
}



function Button({ label, color }) {

    const [bgColor, setBgColor] = useState("red");

    return (
        <button> <style backgroundColor={bgColor} color={color}></style>{label}</button>
    )
}

export default Button;