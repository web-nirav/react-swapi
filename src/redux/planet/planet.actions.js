import PlanetActionTypes from "./planet.types";

export const fetchPlanetsStarts = () => ({
  type: PlanetActionTypes.FETCH_PLANETS_STARTS,
});

export const fetchPlanetsSuccess = (planets) => ({
  type: PlanetActionTypes.FETCH_PLANETS_SUCCESS,
  payload: planets,
});

export const fetchPlanetsFailure = (error) => ({
  type: PlanetActionTypes.FETCH_PLANETS_FAILURE,
  payload: error,
});
