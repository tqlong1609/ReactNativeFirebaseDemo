import {
  LOAD_DATA,
} from './action.const';

export const onLoad = (dispatch, uid) =>
  dispatch({
    type: LOAD_DATA,
    value: uid,
  });
