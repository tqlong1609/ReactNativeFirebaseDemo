import {
  SIGN_IN_ASYN_SUCCESS,
  SIGN_IN_ASYN_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import {signInSuccess, signInFail} from '../actionTypes/Login.action';
function* login(dispatch) {
  try {
    const response = yield call(
      FirebaseServices.loginWithEmailAndPassword,
      dispatch,
    );
    yield put(signInSuccess(response));
  } catch (error) {
    console.log('error: ' + error);
    yield put(signInFail(error));
  }
}

function* loginWithFacebook(dispatch) {
  try {
    const response = yield call(
      FirebaseServices.signUpWithFacebookApi,
      dispatch,
    );
    yield put(signInSuccess(response));
  } catch (error) {
    console.log('error: ' + error);
    yield put(signInFail(error));
  }
}

export {login, loginWithFacebook};
