import {
  LOAD_DATA_ASYN_SUCCESS,
  LOAD_DATA_ASYN_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import WarningSettingTimer from '../../lib/utils/WarningSettingTimer';
import {loadDataSuccess, loadDataFail} from '../actionTypes/Main.action';
function* loadData(dispatch) {
  WarningSettingTimer();
  try {
    const ref = FirebaseServices.loadData(dispatch.value);
    const data = yield call([ref, ref.once], 'value');
    value = data.val();
    yield put(loadDataSuccess(value));
  } catch (error) {
    console.log(error);
    yield put(loadDataFail(error));
  }
}

export {loadData};
