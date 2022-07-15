import React from "react";

import logoReact from "./szkola-reacta-logo.png";

const styles = {
    width: "150px",
    height: "auto"
}

function Logo() {
    return (
        <div><img src={logoReact} style={styles}/></div>
    )
}

export default Logo;