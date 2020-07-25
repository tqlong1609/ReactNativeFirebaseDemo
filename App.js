import React, {Component} from 'react';
import * as RNLocalize from 'react-native-localize';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {BACKGROUND_SCREEN} from './src/styles/colors';
import MainApp from './src/views/Main/Main';
import LoginApp from './src/views/Login/Login';
import SignUpApp from './src/views/SingUp/SignUp';
import AddItemAdd from './src/views/AddItem/AddItem';
import Splash from './src/views/Splash/Splash';
import * as Const from './src/lib/const';
import * as NameScreen from './src/lib/configs/nameScreen';

import {setI18nConfig, translate} from './src/lib/locales';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: NameScreen.SPLASH_SCREEN};
    setI18nConfig(); // set initial config
    setTimeout(() => {
      this.setState({currentScreen: NameScreen.LOGIN_SCREEN});
    }, Const.TIME_SPLASH_SCREEN);
  }
  componentDidMount() {
    RNLocalize.addEventListener('change', () => this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener(
      'change',
      () => this.handleLocalizationChange,
    );
  }
  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
  render() {
    const {currentScreen} = this.state;
    let screen =
      currentScreen === NameScreen.SPLASH_SCREEN ? (
        <Stack.Screen
          name={NameScreen.SPLASH_SCREEN}
          component={Splash}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name={NameScreen.LOGIN_SCREEN}
          component={LoginApp}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: BACKGROUND_SCREEN},
          }}
        />
      );
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {screen}
          <Stack.Screen name={NameScreen.MAIN_SCREEN} component={MainApp} />
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
