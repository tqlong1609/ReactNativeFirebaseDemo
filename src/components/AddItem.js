import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import StyleApp from '../theme';
export class AddItem extends Component {
  render() {
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
            <Image style={StyleApp.StyleAddItem.image} />
            <TouchableOpacity style={StyleApp.StyleAddItem.btnUpload}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
          <View style={StyleApp.StyleAddItem.containerContent}>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Name:</Text>
              <TextInput style={StyleApp.StyleAddItem.textContent} />
            </View>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Address:</Text>
              <TextInput style={StyleApp.StyleAddItem.textContent} />
            </View>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Time:</Text>
              <TextInput style={StyleApp.StyleAddItem.textContent} />
            </View>
            <View style={StyleApp.StyleAddItem.containerText}>
              <Text style={StyleApp.StyleAddItem.textHeader}>Cost:</Text>
              <TextInput
                style={StyleApp.StyleAddItem.textContent}
                keyboardType={'numeric'}
              />
            </View>
            <View style={StyleApp.StyleAddItem.containerButton}>
              <TouchableOpacity style={StyleApp.StyleAddItem.btnAdd}>
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
