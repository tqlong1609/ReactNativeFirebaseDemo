import React, {Component} from 'react';
import {Text, View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainApp from './src/components/Main';
import LoadingApp from './src/components/Loading';
import LoginApp from './src/components/Login';
import SignUpApp from './src/components/SignUp';
import AddItemApp from './src/components/AddItem';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Loading" component={LoadingApp} /> */}
          <Stack.Screen name="LoginApp" component={LoginApp} />
          <Stack.Screen name="MainApp" component={MainApp} />
          <Stack.Screen name="SignUpApp" component={SignUpApp} />
          <Stack.Screen name="AddItemApp" component={AddItemApp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
