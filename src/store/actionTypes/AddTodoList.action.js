import {
  SAVE_TODOS,
  RESET_STATE_SAVE_TODOS,
  RESET_IS_LOAD,
  RESET_IS_SUCCESS_DELETE,
  EDIT_TODO,
  SAVE_TODOS_ASYN_FAIL,
  SAVE_TODOS_ASYN_SUCCESS,
} from './action.const';

export const saveTodos = (dispatch, todos) => {
  dispatch({
    type: SAVE_TODOS,
    values: todos,
  });
};

export const resetData = (dispatch) =>
  dispatch({
    type: RESET_STATE_SAVE_TODOS,
  });

export const resetUpdateData = (dispatch) => {
  dispatch({
    type: RESET_IS_LOAD,
  });
  dispatch({
    type: RESET_IS_SUCCESS_DELETE,
  });
};

export const editDataTodos = (dispatch, todos) => {
  dispatch({
    type: EDIT_TODO,
    values: todos,
  });
};

export const saveTodoSuccess = () => {
  return {
    type: SAVE_TODOS_ASYN_SUCCESS,
  };
};

export const saveTodoFail = (error) => {
  return {type: SAVE_TODOS_ASYN_FAIL, value: error};
};
