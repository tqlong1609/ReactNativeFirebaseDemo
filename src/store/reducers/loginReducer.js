import {
  SIGN_IN_ASYN_SUCCESS,
  SIGN_IN_ASYN_FAIL,
  SIGN_UP_ASYN_FAIL,
  RESET_STATE_SIGN_IN,
  RESET_STATE_SIGN_UP
} from '../actionTypes/action.const';
import State from '../state';
const loginReducer = (state = State.LoginState, action) => {
  const newState = {...state};
  switch (action.type) {
    case RESET_STATE_SIGN_IN:
      newState.logined = false;
      newState.errorLogin = '';
      break;
    case RESET_STATE_SIGN_UP:
      newState.logined = false;
      newState.errorSignUp = '';
      break;
    case SIGN_IN_ASYN_SUCCESS:
      newState.logined = true;
      newState.uid = action.value.user.uid;
      // console.log('myid: ' + newState.uid);
      // console.log('login: ' + JSON.stringify(action.value.user.uid));
      break;
    case SIGN_IN_ASYN_FAIL:
      newState.logined = false;
      newState.errorLogin = action.value.toString();
      break;
    case SIGN_UP_ASYN_FAIL:
      newState.logined = false;
      newState.errorSignUp = action.value.toString();
      break;
  }
  return newState;
};

export default loginReducer;
