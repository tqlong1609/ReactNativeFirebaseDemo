import {
  SIGN_UP,
  RESET_STATE_SIGN_UP,
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
