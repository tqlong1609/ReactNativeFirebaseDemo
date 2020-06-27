import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImagePic,
  Platform,
} from 'react-native';
import StyleApp from '../styles';
import ImagePicker from 'react-native-image-picker';
import HandleAddItem from '../containers/handleAddItem';
import ImageLoad from 'react-native-image-placeholder';
import {call} from 'react-native-reanimated';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImage: '',
      urlImageFireBase: '',
      name: '',
      address: '',
      time: '',
      cost: '',
    };
  }
  clickAdd = () => {
    this.handleUploadImageFireBase(this.state.urlImageFireBase).then((url) => {
      let arr = {
        uri: url,
        name: this.state.name,
        address: this.state.address,
        time: this.state.time,
        cost: this.state.cost,
      };
      HandleAddItem.uploadContentToFireBase(arr);
    });
  };

  handleUploadImageFireBase = (uri) => {
    HandleAddItem.handleWarningSettingtimmer();
    return HandleAddItem.uploadImage(uri);
  };
  clickUpload = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // console.log(response.uri);
        this.setState({
          urlImage: 'data:image/jpeg;base64,' + response.data,
          urlImageFireBase: response.uri,
        });
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  render() {
    // console.log(this.state.urlImage);
    const {urlImage} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={StyleApp.StyleAddItem.containerImage}>
            {(() => {
              switch (urlImage) {
                case null:
                  return null;
                case '':
                  return (
                    <Image
                      source={require('../assets/img/high_priority_127px.png')}
                    />
                  );
                default:
                  return (
                    <ImageLoad
                      style={StyleApp.StyleAddItem.image}
                      loadingStyle={{size: 'large', color: 'red'}}
                      source={{uri: urlImage}}
                    />
                  );
              }
            })()}
            <TouchableOpacity
              style={StyleApp.StyleAddItem.btnUpload}
              onPress={this.clickUpload}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
          <View style={StyleApp.StyleAddItem.containerContent}>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Name:</Text>
              <TextInput
                style={StyleApp.StyleAddItem.textContent}
                onChangeText={(text) => this.setState({name: text})}
              />
            </View>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Address:</Text>
              <TextInput
                style={StyleApp.StyleAddItem.textContent}
                onChangeText={(text) => this.setState({address: text})}
              />
            </View>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Time:</Text>
              <TextInput
                style={StyleApp.StyleAddItem.textContent}
                onChangeText={(text) => this.setState({time: text})}
              />
            </View>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Cost:</Text>
              <TextInput
                style={StyleApp.StyleAddItem.textContent}
                onChangeText={(text) => this.setState({cost: text})}
                keyboardType={'numeric'}
              />
            </View>
            <View style={StyleApp.StyleAddItem.containerButton}>
              <TouchableOpacity
                style={StyleApp.StyleAddItem.btnAdd}
                onPress={this.clickAdd}>
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddItem;
