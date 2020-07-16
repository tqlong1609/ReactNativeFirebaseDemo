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
import {MAIN_SCREEN} from '../../lib/configs/nameScreen';
import {translate} from '../../lib/locales';
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
      isAdded: false,
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
  };

  clickUpload = () => {
    AddItemController.uploadImagePicker((urlImage, urlImageFireBase) => {
      this.setState({
        urlImage: urlImage,
        urlImageFireBase: urlImageFireBase,
      });
    });
  };

  static getDerivedStateFromProps(_props, _state) {
    if (_state.isAdded === _props.isAdded) {
      return null;
    }
    if (_props.isAdded) {
      //TODO: Performance not good, todo another way
      _props.resetData();
      // console.log('ok baby');
      _props.navigation.navigate(MAIN_SCREEN);
      return null;
    }
    return {error: _props.error, isAdded: _props.isAdded};
  }
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
              <Text>{translate('Upload')}</Text>
            </TouchableOpacity>
          </View>
          <View style={AddItemStyle.containerContent}>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>{translate('Name')}:</Text>
              <TextInput
                style={AddItemStyle.textContent}
                onChangeText={(text) => this.setState({name: text})}
              />
            </View>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>
                {translate('Address')}:
              </Text>
              <TextInput
                style={AddItemStyle.textContent}
                onChangeText={(text) => this.setState({address: text})}
              />
            </View>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>{translate('Time')}:</Text>
              <TextInput
                style={AddItemStyle.textContent}
                onChangeText={(text) => this.setState({time: text})}
              />
            </View>
            <View style={AddItemStyle.containerText}>
              <Text style={AddItemStyle.textHeader}>{translate('Cost')}:</Text>
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
                <Text>{translate('Add')}</Text>
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
