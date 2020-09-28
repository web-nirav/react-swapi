import React, { useState } from "react";
import { connect } from "react-redux";

import { loginStart } from "../redux/user/user.action";
import { selectLoginError } from "../redux/user/user.selectors";

const LoginPage = ({ loginStart, logingEror }) => {
  const [userCredential, setUserCredential] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userCredential;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", username, password);
    loginStart(username, password);
  };

  return (
    <div className="container">
      <h2>Login page</h2>
      {logingEror && <div className="error">{logingEror}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginStart: (username, password) =>
    dispatch(loginStart({ username, password })),
});

const mapStateToProps = (state) => ({
  logingEror: selectLoginError(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
