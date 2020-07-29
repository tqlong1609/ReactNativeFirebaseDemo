import {put, call, take, takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN,
  SIGN_UP,
  ADD_ITEM,
  LOAD_DATA,
  SIGN_IN_WITH_FACEBOOK,
  SAVE_TODOS,
} from '../../store/actionTypes/action.const';

import * as Login from './Login.Sagas';
import * as SignUp from './SignUp.Sagas';
import * as AddItem from './AddItem.Sagas';
import * as Main from './Main.Sagas';
import * as AddTodoList from './AddTodoList.sagas';

const rootSaga = function* someSaga() {
  yield takeEvery(SIGN_IN, Login.login);
  yield takeEvery(SIGN_IN_WITH_FACEBOOK, Login.loginWithFacebook);
  yield takeEvery(SIGN_UP, SignUp.signUp);
  yield takeEvery(ADD_ITEM, AddItem.addItemWithFirebase);
  yield takeEvery(LOAD_DATA, Main.loadData);
  yield takeEvery(SAVE_TODOS, AddTodoList.saveData);
};

export default rootSaga;
