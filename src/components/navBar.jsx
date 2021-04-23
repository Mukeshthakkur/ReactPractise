import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/">
          Movies
        </NavLink>
        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/rentals">
          Rentals
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
