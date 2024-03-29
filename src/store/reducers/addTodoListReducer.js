import {
  SAVE_TODOS_ASYN_SUCCESS,
  SAVE_TODOS_ASYN_FAIL,
  RESET_STATE_SAVE_TODOS,
  RESET_IS_LOAD
} from '../actionTypes/action.const';
import State from '../state';

const addItemReducer = (state = State.AddTodoList, action) => {
  const newState = {...state};
  switch (action.type) {
    case RESET_STATE_SAVE_TODOS:
      newState.isSuccess = false;
      newState.error = '';
      break;
    case SAVE_TODOS_ASYN_SUCCESS:
      newState.isSuccess = true;
      newState.isLoad = true;
      break;
    case RESET_IS_LOAD: {
      newState.isLoad = false;
      break;
    }
    case SAVE_TODOS_ASYN_FAIL:
      newState.isSuccess = false;
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default addItemReducer;
