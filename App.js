import React, {Component} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainApp from './src/views/Main/Main';
import LoginApp from './src/views/Login/Login';
import SignUpApp from './src/views/SingUp/SignUp';
// import AddItemApp from './src/views/AddItem';
import * as NameScreen from './src/lib/configs/nameScreen';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={NameScreen.LOGIN_SCREEN} component={LoginApp} />
          <Stack.Screen name={NameScreen.MAIN_SCREEN} component={MainApp} />
          <Stack.Screen name={NameScreen.SIGN_UP_SCREEN} component={SignUpApp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
