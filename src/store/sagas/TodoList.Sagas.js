import {
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import {deleteSuccess, deleteFail} from '../actionTypes/TodoList.action';

function* deleteTodo(dispatch) {
  try {
    const response = yield call(FirebaseServices.deleteData, dispatch);
    yield put(deleteSuccess());
  } catch (error) {
    console.log(error);
    yield put(deleteFail(error));
  }
}

export {deleteTodo};
