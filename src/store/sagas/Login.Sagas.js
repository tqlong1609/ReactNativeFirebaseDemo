import {SIGN_IN_ASYN_SUCCESS, SIGN_IN_ASYN_FAIL} from '../../store/actionTypes';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';

function* login(dispatch) {
  try {
    const response = yield call(
      FirebaseServices.loginWithEmailAndPassword,
      dispatch,
    );
    // console.log('User Saga Response', JSON.stringify(response));
    yield put({
      type: SIGN_IN_ASYN_SUCCESS,
      value: response,
    });
  } catch (error) {
    console.log('error: ' + error);
    yield put({type: SIGN_IN_ASYN_FAIL, value: error});
  }
}

function* loginWithFacebook(dispatch) {
  try {
    const response = yield call(
      FirebaseServices.signUpWithFacebookApi,
      dispatch,
    );
    yield put({
      type: SIGN_IN_ASYN_SUCCESS,
      value: response,
    });
  } catch (error) {
    console.log('error: ' + error);
    yield put({type: SIGN_IN_ASYN_FAIL, value: error});
  }
}

export {login, loginWithFacebook};
