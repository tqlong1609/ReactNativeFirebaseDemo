import React, {Component} from 'react';
import * as RNLocalize from 'react-native-localize';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {BACKGROUND_SCREEN} from './src/styles/colors';

// view
import MainApp from './src/views/Main/Main';
import LoginApp from './src/views/Login/Login';
import SignUpApp from './src/views/SingUp/SignUp';
import AddItemAdd from './src/views/AddItem/AddItem';
import Splash from './src/views/Splash/Splash';

// const
import * as ConstTime from './src/lib/const/Time.const';
import * as NameScreen from './src/lib/const/Screen.const';

// locale language
import {setI18nConfig, translate} from './src/lib/locales';
import './src/lib/locales/i18n';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: NameScreen.SPLASH_SCREEN};
    setI18nConfig(); // set initial config
    setTimeout(() => {
      this.setState({currentScreen: NameScreen.LOGIN_SCREEN});
    }, ConstTime.TIME_SPLASH_SCREEN);
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
    const {t, i18n} = this.props;
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
            headerShown: false,
          }}
        />
      );
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {screen}
          <Stack.Screen
            name={NameScreen.MAIN_SCREEN}
            component={MainApp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={NameScreen.SIGN_UP_SCREEN}
            component={SignUpApp}
            options={{
              headerShown: false,
            }}
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
