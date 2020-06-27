// Login.js
import React from 'react';
import {Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import LoginStyle from './Login.Style';
import LoginController from './Login.Controller';
import {connect} from 'react-redux';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', error: '', logined: false};
  }

  static getDerivedStateFromProps(_props, _state) {
    if (_state.logined === _props.logined) {
      return null;
    }
    if (_props.logined) {
      console.log('success');
      return null;
    }
    return {error: _props.error};
  }

  render() {
    return (
      <View style={LoginStyle.container}>
        <Text>Login</Text>
        {this.props.error !== '' && <Text style={{color: 'red'}}>asd</Text>}
        <TextInput
          style={LoginStyle.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={LoginStyle.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity
          style={LoginStyle.btnLogin}
          onPress={() =>
            this.props.onSignIn(this.state.email, this.state.password)
          }>
          <Text style={LoginStyle.txtLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={LoginStyle.btnSignUp}
          onPress={() => this.props.navigation.navigate('SignUpApp')}>
          <Text style={LoginStyle.txtSignUp}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  LoginController.mapStateToProps,
  LoginController.mapDispatchToProps,
)(Login);
