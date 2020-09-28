import { takeLatest, call, all, put } from "redux-saga/effects";
import PlanetActionTypes from "./planet.types";
import { fetchPlanetsFailure, fetchPlanetsSuccess } from "./planet.actions";
import { commonApi } from "../utils";

export function* fetchPlanetsAsync() {
  try {
    const planets = yield call(commonApi, `planets/`);
    // console.log(planets);
    yield put(fetchPlanetsSuccess(planets.data.results));
  } catch (error) {
    yield put(fetchPlanetsFailure(error));
  }
}

export function* fetchPlanetsStarts() {
  yield takeLatest(PlanetActionTypes.FETCH_PLANETS_STARTS, fetchPlanetsAsync);
}

export function* planetSagas() {
  yield all([call(fetchPlanetsStarts)]);
}
