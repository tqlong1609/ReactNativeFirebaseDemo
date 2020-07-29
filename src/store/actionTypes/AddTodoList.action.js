import {SAVE_TODOS} from './action.const';

export const saveTodos = (dispatch, todos) => {
  dispatch({
    type: SAVE_TODOS,
    values: todos,
  });
};
