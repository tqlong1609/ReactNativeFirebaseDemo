import HandleAddItem from '../../containers/handleAddItem';
import {
  ADD_ITEM_ASYN_SUCCESS,
  ADD_ITEM_ASYN_FAIL,
} from '../../store/actionTypes/action.const';

import {call, put} from 'redux-saga/effects';
function* addItemWithFirebase(dispatch) {
  try {
    HandleAddItem.handleWarningSettingtimmer();
    const responseImage = yield call(
      HandleAddItem.uploadImage,
      dispatch.value.urlImageFireBase,
    );
    dispatch.value['urlImageFireBase'] = responseImage;
    const responseContent = yield call(
      HandleAddItem.uploadContentToFireBase,
      dispatch.value,
    );
    yield put({
      type: ADD_ITEM_ASYN_SUCCESS,
      value: responseContent,
    });
  } catch (error) {
    console.log('error: ' + error);
    yield put({type: ADD_ITEM_ASYN_FAIL, value: error});
  }
  // HandleAddItem.uploadImage(dispatch.value.urlImageFireBase);
  //HandleAddItem.uploadContentToFireBase(dispatch.value);
}
export {addItemWithFirebase};
