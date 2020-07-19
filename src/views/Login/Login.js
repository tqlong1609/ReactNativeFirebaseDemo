// Login.js
import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import LoginStyle from './Login.Style';
import LoginController from './Login.Controller';
import {connect} from 'react-redux';
import {SIGN_UP_SCREEN, MAIN_SCREEN} from '../../lib/configs/nameScreen';
import {translate} from '../../lib/locales';
import {Picker} from '@react-native-community/picker';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      logined: false,
      selectedValue: 'en',
      setSelectedValue: 'en',
    };
  }

  static getDerivedStateFromProps(_props, _state) {
    if (_state.logined === _props.logined) {
      return null;
    }
    if (_props.logined) {
      _props.resetData();
      _props.navigation.navigate(MAIN_SCREEN);
      return null;
    }
    return {error: _props.error, logined: _props.logine};
  }
  onSignIn = () => {
    this.props.onSignIn(this.state.email, this.state.password);
  };

  setSelectedValue = (itemValue) => {
    this.setState({selectedValue: itemValue});
  };

  render() {
    return (
      <View style={LoginStyle.container}>
        <Text>{translate('Login')}</Text>
        {this.props.error !== '' && (
          <Text style={{color: 'red', textAlign: 'center'}}>
            {this.props.error}
          </Text>
        )}
        <TextInput
          style={LoginStyle.textInput}
          autoCapitalize="none"
          placeholder={translate('Email')}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={LoginStyle.textInput}
          autoCapitalize="none"
          placeholder={translate('Password')}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity
          style={LoginStyle.btnLogin}
          onPress={() => this.onSignIn()}>
          <Text style={LoginStyle.txtLogin}>{translate('Login')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={LoginStyle.btnSignUp}
          onPress={() => this.props.navigation.navigate(SIGN_UP_SCREEN)}>
          <Text style={LoginStyle.txtSignUp}>
            {translate("Don't have an account? Sign Up")}
          </Text>
        </TouchableOpacity>
        <Picker
          selectedValue={this.state.selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) =>
            this.setSelectedValue(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

export default connect(
  LoginController.mapStateToProps,
  LoginController.mapDispatchToProps,
)(Login);
