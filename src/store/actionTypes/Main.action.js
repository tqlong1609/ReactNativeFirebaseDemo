import {
  LOAD_DATA,
  LOAD_DATA_ASYN_SUCCESS,
  LOAD_DATA_ASYN_FAIL,
} from './action.const';

export const onLoad = (dispatch, uid) =>
  dispatch({
    type: LOAD_DATA,
    value: uid,
  });

export const loadDataSuccess = (value) => {
  return {type: LOAD_DATA_ASYN_SUCCESS, value: value};
};

export const loadDataFail = (error) => {
  return {type: LOAD_DATA_ASYN_FAIL, value: error};
};
