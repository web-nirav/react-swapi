import { createSelector } from "reselect";

const selectPlanets = (state) => state.planets;

export const selectPlanetsList = createSelector(
  selectPlanets,
  (planets) => planets.planets
);
