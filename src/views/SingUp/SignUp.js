// SignUp.js
import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import SignUpController from './SignUp.Controller';
import SignUpStyle from './SignUp.Style';
import {LOGIN_SCREEN, MAIN_SCREEN} from '../../lib/configs/nameScreen';
import {connect} from 'react-redux';
import {AlertApp} from '../../lib/utils/AlertApp';
import {translate} from '../../lib/locales';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      isSignUp: false,
    };
  }

  static getDerivedStateFromProps(_props, _state) {
    if (_state.isSignUp === _props.isSignUp) {
      return null;
    }
    if (_props.isSignUp) {
      _props.resetData();
      AlertApp(
        translate('SignUp Success'),
        translate('Do you want login ?'),
        (value) => {
          if (value === 'OK') {
            _props.navigation.navigate(LOGIN_SCREEN);
          } else {
            return {errorMessage: '', isSignUp: false};
          }
        },
      );
      return null;
    }
    return {errorMessage: _props.error, isSignUp: _props.isSignUp};
  }

  onSignUp = () => {
    try {
      SignUpController.checkEmptyInput(
        this.state.email,
        this.state.password,
        this.state.confirmPassword,
      );
      SignUpController.checkConfirmPassword(
        this.state.password,
        this.state.confirmPassword,
      );
      this.props.onSignUp(this.state.email, this.state.password);
    } catch (error) {
      let errorMessage = error.toString();
      this.setState({errorMessage: errorMessage});
    }
  };

  render() {
    console.log(this.state.errorMessage);
    return (
      <View style={SignUpStyle.container}>
        <Text>{translate('Sign Up')}</Text>
        {this.state.errorMessage !== '' && (
          <Text style={{color: 'red', textAlign: 'center'}}>
            {this.state.errorMessage}
          </Text>
        )}
        <TextInput
          placeholder={translate('Email')}
          autoCapitalize="none"
          style={SignUpStyle.textInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder={translate('Password')}
          autoCapitalize="none"
          style={SignUpStyle.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder={translate('Confirm Password')}
          autoCapitalize="none"
          style={SignUpStyle.textInput}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
        />
        <TouchableOpacity
          style={SignUpStyle.btnSignUp}
          onPress={() => this.onSignUp()}>
          <Text style={SignUpStyle.txtSignUp}>{translate('Sign Up')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SignUpStyle.btnLogin}
          onPress={() => this.props.navigation.navigate(LOGIN_SCREEN)}>
          <Text style={SignUpStyle.txtLogin}>
            {translate('Do you have an account? Login')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(
  SignUpController.mapStateToProps,
  SignUpController.mapDispatchToProps,
)(SignUp);
