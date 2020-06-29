import {put, call, take, takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN,
  SIGN_IN_ASYN_SUCCESS,
  SIGN_IN_ASYN_FAIL,
} from '../../store/actionTypes';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
const rootSaga = function* someSaga() {
  yield takeEvery(SIGN_IN, login);
};

function* login(dispatch) {
  try {
    const response = yield call(FirebaseServices.loginWithEmail, dispatch);
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

export default rootSaga;
