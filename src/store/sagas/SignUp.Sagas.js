import {
  SIGN_UP_ASYN_SUCCESS,
  SIGN_UP_ASYN_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import WarningSettingTimer from '../../lib/utils/WarningSettingTimer';
function* signUp(dispatch) {
  try {
    // sign up into firebase
    const response = yield call(
      FirebaseServices.signUpWithEmailAndPassword,
      dispatch,
    );
    const data = {name: dispatch.value.name, email: dispatch.value.email};
    // save name and email into database firebase
    WarningSettingTimer();
    const responseSaveUser = yield call(FirebaseServices.pushData, data);
    // const listResponse = {
    //   response: response,
    //   responseSaveUser: responseSaveUser,
    // };
    // console.log(responseSaveUser);
    // console.log(data);
    yield put({
      type: SIGN_UP_ASYN_SUCCESS,
      value: data,
    });
  } catch (error) {
    yield put({type: SIGN_UP_ASYN_FAIL, value: error});
  }
}

export {signUp};
