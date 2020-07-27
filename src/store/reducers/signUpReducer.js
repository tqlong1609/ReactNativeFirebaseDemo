import {
  SIGN_UP_ASYN_SUCCESS,
  SIGN_UP_ASYN_FAIL,
  RESET_STATE_SIGN_UP,
} from '../actionTypes/action.const';
import State from '../state';
const signUpReducer = (state = State.SignUpState, action) => {
  const newState = {...state};
  switch (action.type) {
    case RESET_STATE_SIGN_UP: {
      newState.isSignUp = false;
      newState.error = '';
      break;
    }
    case SIGN_UP_ASYN_SUCCESS:
      newState.isSignUp = true;
      // console.log('alo alo 123: ' + JSON.stringify(action.value));
      break;
    case SIGN_UP_ASYN_FAIL:
      newState.isSignUp = false;
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default signUpReducer;
