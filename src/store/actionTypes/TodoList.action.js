import {
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from './action.const';

export const onDelete = (dispatch, uid, idDelete) => {
  dispatch({
    type: DELETE_TODO,
    values: {uid: uid, idDelete: idDelete},
  });
};

export const deleteSuccess = () => {
  return {type: DELETE_TODO_SUCCESS};
};

export const deleteFail = (error) => {
  return {type: DELETE_TODO_FAIL, value: error};
};
