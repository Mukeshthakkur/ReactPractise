import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Flexmov
      </Link>
      <div className="collapse navbar-collapse" id="navbarAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Movies
          </NavLink >
          <NavLink className="nav-item nav-link" to="/customer">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className='nav-itme nav-link' to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
