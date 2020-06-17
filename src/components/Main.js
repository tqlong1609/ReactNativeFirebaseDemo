import React, {Component} from 'react';
import {Text, View} from 'react-native';

// style
import AppStyle from '../theme';

//config
import firebase from '../config/FirebaseConfig';

export class Main extends Component {
  render() {
    return (
      <View>
        <Text style={AppStyle.StyleMain.container}> textInComponent </Text>
      </View>
    );
  }
}

export default Main;
