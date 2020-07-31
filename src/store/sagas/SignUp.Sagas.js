import {
  SIGN_IN_ASYN_SUCCESS,
  SIGN_UP_ASYN_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import WarningSettingTimer from '../../lib/utils/WarningSettingTimer';
import {signUpSuccess, signUpFail} from '../actionTypes/SignUp.action';
function* signUp(dispatch) {
  try {
    const response = yield call(
      FirebaseServices.signUpWithEmailAndPassword,
      dispatch,
    );
    const data = {
      name: dispatch.value.name,
      email: dispatch.value.email,
      uid: response.user.uid,
    };
    // save name and email into database firebase
    WarningSettingTimer();
    const responseSaveUser = yield call(FirebaseServices.pushData, data);
    yield put(signUpSuccess(response));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export {signUp};
