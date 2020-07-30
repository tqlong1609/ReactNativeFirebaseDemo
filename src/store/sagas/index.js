import {put, call, take, takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN,
  SIGN_UP,
  LOAD_DATA,
  SIGN_IN_WITH_FACEBOOK,
  SAVE_TODOS,
  DELETE_TODO,
  EDIT_TODO
} from '../../store/actionTypes/action.const';

import * as Login from './Login.Sagas';
import * as SignUp from './SignUp.Sagas';
import * as Main from './Main.Sagas';
import * as AddTodoList from './AddTodoList.sagas';
import * as TodoList from './TodoList.Sagas';

const rootSaga = function* someSaga() {
  yield takeEvery(SIGN_IN, Login.login);
  yield takeEvery(SIGN_IN_WITH_FACEBOOK, Login.loginWithFacebook);
  yield takeEvery(SIGN_UP, SignUp.signUp);
  yield takeEvery(LOAD_DATA, Main.loadData);
  yield takeEvery(EDIT_TODO, AddTodoList.editData);
  yield takeEvery(SAVE_TODOS, AddTodoList.saveData);
  yield takeEvery(DELETE_TODO, TodoList.deleteTodo);
};

export default rootSaga;
