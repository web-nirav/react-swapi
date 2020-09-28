import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homePage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import PlanetsPage from "./pages/planetsPage.jsx";
import Header from "./components/header.jsx";

import "./App.css";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import PlanetDetailsPage from "./pages/planetDetailsPage.jsx";

function App({ currentUser }) {
  return (
    <div>
      <h1>Planets App.</h1>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/login"
          render={() =>
            currentUser ? <Redirect to="planets" /> : <LoginPage />
          }
        />
        <Route exact path="/planets" component={PlanetsPage} />
        <Route path="/planets/:id" component={PlanetDetailsPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
