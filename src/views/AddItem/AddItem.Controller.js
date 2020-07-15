import {ADD_ITEM} from '../../store/actionTypes';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
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
    // console.log(state);
    return {};
  };
}

export default new HandleAddItem();