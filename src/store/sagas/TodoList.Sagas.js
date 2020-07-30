import {
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from '../../store/actionTypes/action.const';
import FirebaseServices from '../../api/services/firebase/firebaseStore';
import {put, call, take, takeEvery} from 'redux-saga/effects';

function* deleteTodo(dispatch) {
  try {
    const response = yield call(FirebaseServices.deleteData, dispatch);
    yield put({type: DELETE_TODO_SUCCESS});
  } catch (error) {
    console.log(error);
    yield put({type: DELETE_TODO_FAIL, value: error});
  }
}

export {deleteTodo};
