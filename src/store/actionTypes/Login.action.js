import {
  SIGN_IN,
  RESET_STATE_SIGN_IN,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_IN_ASYN_SUCCESS,
  SIGN_IN_ASYN_FAIL,
} from './action.const';

export const onSignIn = (dispatch, emailVal, passwordVal) =>
  dispatch({
    type: SIGN_IN,
    value: {email: emailVal, password: passwordVal},
  });

export const resetData = (dispatch) =>
  dispatch({
    type: RESET_STATE_SIGN_IN,
  });

export const onClickFacebook = (dispatch) =>
  dispatch({
    type: SIGN_IN_WITH_FACEBOOK,
  });

export const signInSuccess = (response) => {
  return {
    type: SIGN_IN_ASYN_SUCCESS,
    value: response,
  };
};

export const signInFail = (error) => {
  return {type: SIGN_IN_ASYN_FAIL, value: error};
};
