import {
  SAVE_TODOS_ASYN_SUCCESS,
  SAVE_TODOS_ASYN_FAIL,
} from '../actionTypes/action.const';
import State from '../state';
// import State from '../../store/state';

const addItemReducer = (state = State.AddTodoList, action) => {
  const newState = {...state};
  switch (action.type) {
    case SAVE_TODOS_ASYN_SUCCESS:
      console.log('success');
      break;
    case SAVE_TODOS_ASYN_FAIL:
      console.log(action.value.toString());
      break;
  }
  return newState;
};

export default addItemReducer;
