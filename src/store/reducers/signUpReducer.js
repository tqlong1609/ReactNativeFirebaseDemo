import {SIGN_UP_ASYN_SUCCESS, SIGN_UP_ASYN_FAIL,RESET_STATE_SIGN_UP} from '../actionTypes';
import State from '../state';
const signUpReducer = (state = State.SignUpState, action) => {
  const newState = {...state};
  switch (action.type) {
    case RESET_STATE_SIGN_UP: {
      newState.isSignUp = false;
      break;
    }
    case SIGN_UP_ASYN_SUCCESS:
      newState.isSignUp = true;
      break;
    case SIGN_UP_ASYN_FAIL:
      newState.isSignUp = false;
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default signUpReducer;
