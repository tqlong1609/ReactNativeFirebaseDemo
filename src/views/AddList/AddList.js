import React, {Component} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const backgroundColor = [
  '#5CD859',
  '#24A6D9',
  '#595BD9',
  '#8022D9',
  '#D159D8',
  '#D85963',
  '#D88559',
];

export class AddList extends Component {
  renderColor = () => {
    return backgroundColor.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[
            {
              backgroundColor: color,
              width: 30,
              height: 30,
              borderRadius: 4,
            },
          ]}
        />
      );
    });
  };
  render = () => {
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <TouchableOpacity
          onPress={() => this.props.onCloseModal()}
          style={{position: 'absolute', right: 10, top: 5}}>
          <Icon name="times" style={{fontSize: 35, color: '#CC0000'}} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: '700',
              fontSize: 25,
            }}>
            Create Todo List
          </Text>
          <TextInput
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              width: '80%',
              paddingHorizontal: 16,
              fontSize: 15,
              borderRadius: 6,
              height: 50,
              marginTop: 10,
            }}
            placeholder="List Name ?"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              marginTop: 10,
            }}>
            {this.renderColor()}
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              width: '80%',
              height: 50,
              marginTop: 10,
              borderRadius: 6,
            }}>
            <Text style={{color: 'white', fontWeight: '700'}}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };
}

export default AddList;
