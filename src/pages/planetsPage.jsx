import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPlanetsStarts } from "../redux/planet/planet.actions";

const PlanetsPage = ({ fetchPlanetsStarts, planets, history, match }) => {
  // console.log("history", history, "match", match);
  useEffect(() => {
    fetchPlanetsStarts();
  }, [fetchPlanetsStarts]);

  const handleRowClick = (index) => {
    console.log(planets[index]);
    history.push(`${match.url}/${index}`);
  };

  return (
    <Fragment>
      <h2>Planets page</h2>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Diameter</th>
            <th>Gravity</th>
          </tr>
        </thead>
        <tbody>
          {planets &&
            planets.map((row, index) => (
              <tr key={index} onClick={() => handleRowClick(index)}>
                <td>{row.name}</td>
                <td>{row.population}</td>
                <td>{row.diameter}</td>
                <td>{row.gravity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetsStarts: () => dispatch(fetchPlanetsStarts()),
});

const mapStateToProps = (state) => ({
  planets: state.planets.planets,
}); // selectPlanetsList

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsPage);
