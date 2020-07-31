import {
  SIGN_UP,
  RESET_STATE_SIGN_UP,
  SIGN_IN_ASYN_SUCCESS,
  SIGN_UP_ASYN_FAIL,
} from './action.const';

export const resetData = (dispatch) =>
  dispatch({
    type: RESET_STATE_SIGN_UP,
  });

export const onSignUp = (dispatch, name, emailVal, passwordVal) =>
  dispatch({
    type: SIGN_UP,
    value: {name: name, email: emailVal, password: passwordVal},
  });

export const signUpSuccess = (response) => {
  return {
    type: SIGN_IN_ASYN_SUCCESS,
    value: response,
  };
};

export const signUpFail = (error) => {
  return {type: SIGN_UP_ASYN_FAIL, value: error};
};
