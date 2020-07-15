import {
  LOAD_DATA_ASYN_SUCCESS,
  LOAD_DATA_ASYN_FAIL,
} from '../../store/actionTypes';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import HandleAddItem from '../../containers/handleAddItem';

function* loadData(dispatch) {
  HandleAddItem.handleWarningSettingtimmer();
  try {
    const ref = FirebaseServices.loadData();
    const data = yield call([ref, ref.once], 'value');
    value = data.val();
    yield put({type: LOAD_DATA_ASYN_SUCCESS, value: value});
  } catch (error) {
    yield put({type: LOAD_DATA_ASYN_FAIL, value: error});
  }
}

export {loadData};
