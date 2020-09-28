import PlanetActionTypes from "./planet.types";

const INITIAL_STATE = {
  planets: null,
  isFetching: false,
  error: undefined,
};

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlanetActionTypes.FETCH_PLANETS_STARTS:
      return {
        ...state,
        isFetching: true,
        planets: null,
      };
    case PlanetActionTypes.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        planets: action.payload,
      };
    case PlanetActionTypes.FETCH_PLANETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default planetReducer;
