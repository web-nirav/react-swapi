import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";

const Header = ({ currentUser }) => {
  // console.log("header in", currentUser);
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          {currentUser && (
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          )}
          {!currentUser && (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/planets">
            Planets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
