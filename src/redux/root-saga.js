import { all, call } from "redux-saga/effects";
import { planetSagas } from "./planet/planet.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(planetSagas)]);
}
