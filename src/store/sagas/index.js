import {put, call, take, takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN,
  SIGN_IN_ASYN_SUCCESS,
  SIGN_IN_ASYN_FAIL,
  SIGN_UP,
} from '../../store/actionTypes';

import * as Login from './Login.Sagas';
import * as SignUp from './SignUp.Sagas';
const rootSaga = function* someSaga() {
  yield takeEvery(SIGN_IN, Login.login);
  yield takeEvery(SIGN_UP, SignUp.signUp);
};

export default rootSaga;
