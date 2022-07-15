import React from "react";

const styles = {
    padding: 15,
    color: "#005654",
};


function NavLink({ to, label }) {
     return (
         <a href={to} style={styles}>{label}</a>
     )
}

export default NavLink;