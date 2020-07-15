import HandleAddItem from '../../containers/handleAddItem';
function* addItemWithFirebase(dispatch) {
  console.log(dispatch);
  HandleAddItem.handleWarningSettingtimmer();
  HandleAddItem.uploadImage(dispatch.value.urlImageFireBase);
  HandleAddItem.uploadContentToFireBase(dispatch.value);
}
export {addItemWithFirebase};
