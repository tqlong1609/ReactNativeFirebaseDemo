// Login.js
import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import StyleApp from '../theme';
import firebase from 'firebase';
import FirebaseConst from '../common/FilebaseConst';
import {AlertApp} from '../untils/AlertApp';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', errorMessage: null};
  }

  signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('MainApp');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        AlertApp(errorCode, errorMessage);
        // ...
      });
  };

  handleLogin = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(FirebaseConst);
      this.signIn();
    } else {
      this.signIn();
    }
  };
  render() {
    return (
      <View style={StyleApp.StyleLogin.container}>
        <Text>Login</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={StyleApp.StyleLogin.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={StyleApp.StyleLogin.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUpApp')}
        />
      </View>
    );
  }
}
