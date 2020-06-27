import {SIGN_IN} from '../actionTypes';
import State from '../state';
const loginReducer = (state = State.LoginState, action) => {
  const newState = {...state};
  switch (action.type) {
    case SIGN_IN:
      if (action.value.email === '1' && action.value.password === '1') {
        newState.email = action.value.email;
        newState.password = action.value.password;
        newState.logined = true;
      } else {
        newState.error = 'Password not true';
        newState.logined = false;
      }
      break;
  }
  return newState;
};

export default loginReducer;
