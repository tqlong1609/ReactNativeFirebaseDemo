import {
  SAVE_TODOS_ASYN_SUCCESS,
  SAVE_TODOS_ASYN_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import WarningSettingTimer from '../../lib/utils/WarningSettingTimer';
import {saveTodoSuccess, saveTodoFail} from '../actionTypes/AddTodoList.action';
function* saveData(dispatch) {
  try {
    WarningSettingTimer();
    const responseSaveUser = yield call(
      FirebaseServices.saveDataTodo,
      dispatch.values,
    );
    yield put(saveTodoSuccess());
  } catch (error) {
    yield put(saveTodoFail(error));
  }
}
function* editData(dispatch) {
  try {
    const response = yield call(FirebaseServices.updateData, dispatch.values);
    console.log(response);
    yield put(saveTodoSuccess());
  } catch (error) {
    console.log(error);
    yield put(saveTodoFail(error));
  }
}

export {saveData, editData};
