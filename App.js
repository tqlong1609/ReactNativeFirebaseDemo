import React, {Component} from 'react';
import * as RNLocalize from 'react-native-localize';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainApp from './src/views/Main/Main';
import LoginApp from './src/views/Login/Login';
import SignUpApp from './src/views/SingUp/SignUp';
import AddItemAdd from './src/views/AddItem/AddItem';
// import AddItemApp from './src/views/AddItem';
import * as NameScreen from './src/lib/configs/nameScreen';

import {setI18nConfig, translate} from './src/lib/locales';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    setI18nConfig(); // set initial config
  }
  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }
  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={translate(NameScreen.LOGIN_SCREEN)}
            component={LoginApp}
          />
          <Stack.Screen
            name={translate(NameScreen.MAIN_SCREEN)}
            component={MainApp}
          />
          <Stack.Screen
            name={NameScreen.SIGN_UP_SCREEN}
            component={SignUpApp}
          />
          <Stack.Screen
            name={NameScreen.ADD_ITEM_SCREEN}
            component={AddItemAdd}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
