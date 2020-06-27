import React, {Component} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainApp from './src/views/Main';
import LoginApp from './src/views/Login/Login';
import SignUpApp from './src/views/SingUp/SignUp';
import AddItemApp from './src/views/AddItem';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
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
