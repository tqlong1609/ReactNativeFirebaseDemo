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
      // console.log(action.value);
      if (action.value !== null) {
        Object.entries(action.value).map((data) => {
          arrData.push({id: data[0], data: data[1]});
        });
      }

      // const messageObject = action.value;
      // let v = 0;
      // if (messageObject) {
      //   const messageList = Object.keys(messageObject).map((key) => ({
      //     ...messageObject[key],
      //     key: key,
      //   }));
      //   // newState.arrData = messageList;
      //   console.log(messageObject);
      // } else {
      //   console.log('empty');
      // }
      // console.log(arrData);
      newState.arrData = arrData;
      break;
    case LOAD_DATA_ASYN_FAIL:
      newState.error = action.value.toString();
      break;
  }
  return newState;
};

export default mainReducer;
