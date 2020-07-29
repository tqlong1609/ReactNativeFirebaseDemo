import {
  SAVE_TODOS_ASYN_SUCCESS,
  SAVE_TODOS_ASYN_FAIL,
  RESET_STATE_SAVE_TODOS,
} from '../actionTypes/action.const';
import State from '../state';
// import State from '../../store/state';

const addItemReducer = (state = State.AddTodoList, action) => {
  const newState = {...state};
  switch (action.type) {
    case RESET_STATE_SAVE_TODOS:
      newState.isSuccess = false;
      newState.error = '';
      break;
    case SAVE_TODOS_ASYN_SUCCESS:
      newState.isSuccess = true;
      break;
    case SAVE_TODOS_ASYN_FAIL:
      newState.isSuccess = false;
      newState.error = action.value.toString();
      // console.log(action.value.toString());
      break;
  }
  return newState;
};

export default addItemReducer;
