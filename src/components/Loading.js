import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
// import filebaseApp from '../config/FirebaseConfig';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as firebase from 'firebase';

import FilebaseConst from '../common/FilebaseConst';

export class Loading extends Component {
  // componentDidMount() {
  //   this.loadingInit();
  // }
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Loading</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Loading;
