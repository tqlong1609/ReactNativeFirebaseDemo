import {} from '../actionTypes/action.const';
import State from '../state';
const addItemReducer = (state = State.AddTodoList, action) => {
  const newState = {...state};
  switch (
    action.type
    //   case ADD_ITEM_ASYN_SUCCESS:
    //     newState.isAdded = true;
    //     break;
    //   case ADD_ITEM_ASYN_FAIL:
    //     newState.isAdded = false;
    //     newState.error = action.value.toString();
    //     break;
    //   case RESET_STATE:
    //     newState.isAdded = false;
    //     newState.error = "";
    //     break;
  ) {
  }
  return newState;
};

export default addItemReducer;
