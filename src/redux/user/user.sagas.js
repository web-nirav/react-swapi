import { takeLatest, put, call, all } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { loginFailure, loginSuccess } from "./user.action";
import { commonApi } from "../utils";

export function* loginWithUsername({ payload: { username, password } }) {
  try {
    // console.log("user saga", username, password);
    // TODO: here we will put some api call to login user
    let request = {};
    const user = yield call(commonApi, `people/?search=${username}`, request);
    if (user.data.results.length > 0) {
      if (user.data.results[0].birth_year === password) {
        // console.log("user response", user);
        yield put(loginSuccess(user.data.results[0]));
      } else {
        throw new Error("Wrong password");
      }
    } else {
      throw new Error("Wrong password or user");
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* onLoginStart() {
  yield takeLatest(UserActionTypes.LOGIN_START, loginWithUsername);
}

export function* userSagas() {
  yield all([call(onLoginStart)]);
}
