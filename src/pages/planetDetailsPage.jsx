import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPlanetsList } from "../redux/planet/planet.selectors";

const PlanetDetailsPage = ({ planets, match }) => {
  //   console.log("match", match);
  const planetId = match.params.id;
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    setPlanet(planets[planetId]);
  }, [planetId, planets]);

  //   console.log("planet", planet);

  return (
    <Fragment>
      <h2>Planet details</h2>
      {planet && (
        <div>
          <ul>
            <li>Name: {planet.name}</li>
            <li>Population: {planet.population}</li>
            <li>Diameter: {planet.diameter}</li>
            <li>Gravity: {planet.gravity}</li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  planets: selectPlanetsList,
});

export default connect(mapStateToProps)(PlanetDetailsPage);
