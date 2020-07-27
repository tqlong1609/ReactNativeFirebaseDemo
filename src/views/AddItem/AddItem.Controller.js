import {ADD_ITEM, RESET_STATE} from '../../store/actionTypes/action.const';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class HandleAddItem {
  uploadImagePicker = (CallBack) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // console.log(response.uri);
        let urlImage = 'data:image/jpeg;base64,' + response.data;
        let urlImageFireBase = response.uri;
        CallBack(urlImage, urlImageFireBase);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  mapDispatchToProps = (dispatch) => {
    return {
      resetData: () =>
        dispatch({
          type: RESET_STATE,
        }),
      handleUploadImageFireBase: (
        urlImageFireBase,
        name,
        address,
        time,
        cost,
      ) =>
        dispatch({
          type: ADD_ITEM,
          value: {
            urlImageFireBase: urlImageFireBase,
            name: name,
            address: address,
            time: time,
            cost: cost,
          },
        }),
    };
  };

  mapStateToProps = (state) => {
    return {
      error: state.addItem.error,
      isAdded: state.addItem.isAdded,
    };
  };
}

export default new HandleAddItem();
