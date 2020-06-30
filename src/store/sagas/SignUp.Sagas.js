import {SIGN_UP_ASYN_SUCCESS, SIGN_UP_ASYN_FAIL} from '../../store/actionTypes';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';

function* signUp(dispatch) {
  try {
    const response = yield call(
      FirebaseServices.signUpWithEmailAndPassword,
      dispatch,
    );
    // console.log('User Saga Response', JSON.stringify(response));
    yield put({
      type: SIGN_UP_ASYN_SUCCESS,
      value: response,
    });
  } catch (error) {
    yield put({type: SIGN_UP_ASYN_FAIL, value: error});
  }
}

export {signUp};
