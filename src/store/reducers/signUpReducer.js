import {
  SIGN_UP_ASYN_SUCCESS,
  SIGN_UP_ASYN_FAIL,
  RESET_STATE_SIGN_UP,
} from '../actionTypes/action.const';
import State from '../state';
const signUpReducer = (state = State.LoginState, action) => {
  const newState = {...state};
  switch (action.type) {
    case RESET_STATE_SIGN_UP: {
      newState.logined = false;
      newState.error = '';
      break;
    }
    case SIGN_UP_ASYN_SUCCESS:
      newState.logined = true;
      newState.uid = action.value.uid;
      // console.log('newPr: ' + newState.uid);
      // console.log('alo alo 123: ' + action.value.uid);
      break;
    case SIGN_UP_ASYN_FAIL:
      newState.logined = false;
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default signUpReducer;
