import {SAVE_TODOS,RESET_STATE_SAVE_TODOS, RESET_IS_LOAD} from './action.const';

export const saveTodos = (dispatch, todos) => {
  dispatch({
    type: SAVE_TODOS,
    values: todos,
  });
};

export const resetData = (dispatch) =>
  dispatch({
    type: RESET_IS_LOAD,
  });
