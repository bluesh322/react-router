import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/coffee">
                Coffee
            </NavLink>
            <NavLink exact to="/blueberries">
                Blueberries
            </NavLink>
            <NavLink exact to="/pizza">
                Pizza
            </NavLink>
        </nav>
    )
}

export default NavBar;