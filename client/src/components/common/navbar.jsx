import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";
// import { NavbarText } from "react-bootstrap/Navbar";

const Navbar = ({ user }) => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <nav className="navbar navbar-expand-lg navbar-cz sticky-top">
      <Link to="/" className="navbar-brand">
        <img src={require("../../assets/img/newsbuzz.png")} alt="" />
      </Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          {/* <NavLink className='nav-item nav-link' to='/facility-corner'>
						Facility Corner
					</NavLink>
					<NavLink className='nav-item nav-link' to='/garbage-tracking'>
						Garbage Tracking
					</NavLink>
					<NavLink className='nav-item nav-link' to='/security'>
						Security
					</NavLink>
					<NavLink className='nav-item nav-link' to='/elections'>
						Elections
					</NavLink>
					<NavLink className='nav-item nav-link' to='/tender'>
						Tender
					</NavLink> */}

          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavItem
                href="#action/3.1"
                style={{ padding: "50px", textAlign: "center" }}
              >
                Logged in as:
                {user.name}
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-item nav-link ml-3 dropdown-nav-item pt-5"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-item nav-link ml-3 dropdown-nav-item pt-5"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </NavItem>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
