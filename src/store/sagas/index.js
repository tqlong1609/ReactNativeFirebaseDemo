import {put, call, take, takeEvery} from 'redux-saga/effects';
import {SIGN_IN, SIGN_UP, ADD_ITEM} from '../../store/actionTypes';

import * as Login from './Login.Sagas';
import * as SignUp from './SignUp.Sagas';
import * as AddItem from './AddItem.Sagas';
const rootSaga = function* someSaga() {
  yield takeEvery(SIGN_IN, Login.login);
  yield takeEvery(SIGN_UP, SignUp.signUp);
  yield takeEvery(ADD_ITEM, AddItem.addItemWithFirebase);
};

export default rootSaga;
