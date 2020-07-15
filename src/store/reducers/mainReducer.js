import {LOAD_DATA_ASYN_SUCCESS, LOAD_DATA_ASYN_FAIL} from '../actionTypes';
import State from '../state';
const mainReducer = (state = State.MainState, action) => {
  const newState = {...state};
  switch (action.type) {
    case LOAD_DATA_ASYN_SUCCESS:
      const messageObject = action.value;
      let v = 0;
      if (messageObject) {
        const messageList = Object.keys(messageObject).map((key) => ({
          ...messageObject[key],
          key: key,
        }));
        newState.arrData = messageList;
      } else {
        console.log('empty');
      }
      break;
    case LOAD_DATA_ASYN_FAIL:
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default mainReducer;
