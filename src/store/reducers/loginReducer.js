import {SIGN_IN_ASYN_SUCCESS, SIGN_IN_ASYN_FAIL} from '../actionTypes';
import State from '../state';
const loginReducer = (state = State.LoginState, action) => {
  const newState = {...state};
  switch (action.type) {
    case SIGN_IN_ASYN_SUCCESS:
      newState.logined = true;
      break;
    case SIGN_IN_ASYN_FAIL:
      newState.logined = false;
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default loginReducer;
