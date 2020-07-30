import {
  LOAD_DATA_ASYN_SUCCESS,
  LOAD_DATA_ASYN_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import WarningSettingTimer from '../../lib/utils/WarningSettingTimer';

function* loadData(dispatch) {
  WarningSettingTimer();
  try {
    const ref = FirebaseServices.loadData(dispatch.value);
    const data = yield call([ref, ref.once], 'value');
    value = data.val();
    yield put({type: LOAD_DATA_ASYN_SUCCESS, value: value});
  } catch (error) {
    console.log(error);
      yield put({type: LOAD_DATA_ASYN_FAIL, value: error});
  }
}

export {loadData};
