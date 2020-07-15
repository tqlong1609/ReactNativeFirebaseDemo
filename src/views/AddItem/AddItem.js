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
import {connect} from 'react-redux';

import HandleAddItem from '../../containers/handleAddItem';
import ImageLoad from 'react-native-image-placeholder';
import AddItemStyle from './AddItem.Style';
import AddItemController from './AddItem.Controller';

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
    this.props.handleUploadImageFireBase(
      this.state.urlImageFireBase,
      this.state.name,
      this.state.address,
      this.state.time,
      this.state.cost,
    );
    // this.handleUploadImageFireBase(this.state.urlImageFireBase).then((url) => {
    //   let arr = {
    //     uri: url,
    //     name: this.state.name,
    //     address: this.state.address,
    //     time: this.state.time,
    //     cost: this.state.cost,
    //   };
    //   HandleAddItem.uploadContentToFireBase(arr);
    // });
  };

  handleUploadImageFireBase = (uri) => {
    HandleAddItem.handleWarningSettingtimmer();
    return HandleAddItem.uploadImage(uri);
  };
  clickUpload = () => {
    AddItemController.uploadImagePicker((urlImage, urlImageFireBase) => {
      this.setState({
        urlImage: urlImage,
        urlImageFireBase: urlImageFireBase,
      });
    });
  };
  render() {
    // console.log(this.state.urlImage);
    const {urlImage} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={AddItemStyle.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={AddItemStyle.containerImage}>
            {(() => {
              switch (urlImage) {
                case null:
                  return null;
                case '':
                  return (
                    <Image
                      source={require('../../assets/img/high_priority_127px.png')}
                    />
                  );
                default:
                  return (
                    <ImageLoad
                      style={AddItemStyle.image}
                      loadingStyle={{size: 'large', color: 'red'}}
                      source={{uri: urlImage}}
                    />
                  );
              }
            })()}
            <TouchableOpacity
              style={AddItemStyle.btnUpload}
              onPress={this.clickUpload}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
          <View style={AddItemStyle.containerContent}>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>Name:</Text>
              <TextInput
                style={AddItemStyle.textContent}
                onChangeText={(text) => this.setState({name: text})}
              />
            </View>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>Address:</Text>
              <TextInput
                style={AddItemStyle.textContent}
                onChangeText={(text) => this.setState({address: text})}
              />
            </View>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>Time:</Text>
              <TextInput
                style={AddItemStyle.textContent}
                onChangeText={(text) => this.setState({time: text})}
              />
            </View>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>Cost:</Text>
              <TextInput
                style={AddItemStyle.textContent}
                onChangeText={(text) => this.setState({cost: text})}
                keyboardType={'numeric'}
              />
            </View>
            <View style={AddItemStyle.containerButton}>
              <TouchableOpacity
                style={AddItemStyle.btnAdd}
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
export default connect(
  AddItemController.mapStateToProps,
  AddItemController.mapDispatchToProps,
)(AddItem);
