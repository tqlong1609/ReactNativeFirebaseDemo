import {
  LOAD_DATA_ASYN_SUCCESS,
  LOAD_DATA_ASYN_FAIL,
} from '../actionTypes/action.const';
import State from '../state';
const mainReducer = (state = State.MainState, action) => {
  const newState = {...state};
  switch (action.type) {
    case LOAD_DATA_ASYN_SUCCESS:
      let arrData = [];
      if (action.value !== null) {
        Object.entries(action.value).map((data) => {
          arrData.push({id: data[0], data: data[1]});
        });
      }
      newState.arrData = arrData;
      break;
    case LOAD_DATA_ASYN_FAIL:
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default mainReducer;
