import {
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  RESET_IS_SUCCESS_DELETE,
} from '../actionTypes/action.const';
import State from '../state';
const loginReducer = (state = State.TodoList, action) => {
  const newState = {...state};
  switch (action.type) {
    case DELETE_TODO_SUCCESS:
      newState.isSuccess = true;
      break;
    case DELETE_TODO_FAIL:
      newState.isSuccess = false;
      newState.error = newState.value.toString();
      break;
    case RESET_IS_SUCCESS_DELETE:
      console.log('reset');
      newState.isSuccess = false;
      newState.error = '';
      break;
  }
  return newState;
};

export default loginReducer;
