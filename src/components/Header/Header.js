import React from "react";

import Logo from "./Logo";
import NavLink from "./NavLink";
import Menu from "./Menu";

function Header() {
    return (
        <div>
            <Logo/>
            <Menu>
                <NavLink to="/" label="Link1"></NavLink>
                <NavLink to="/" label="Link2"></NavLink>
                <NavLink to="/" label="Link3"></NavLink>
            </Menu>
        </div>
    )
}

export default Header;