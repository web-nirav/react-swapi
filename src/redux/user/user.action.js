import UserActionTypes from "./user.types";

export const loginStart = (userCredential) => ({
  type: UserActionTypes.LOGIN_START,
  payload: userCredential,
});

export const loginSuccess = (user) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: error,
});
