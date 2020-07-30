import {DELETE_TODO} from './action.const';

export const onDelete = (dispatch, uid, idDelete) => {
  dispatch({
    type: DELETE_TODO,
    values: {uid: uid, idDelete: idDelete},
  });
};
