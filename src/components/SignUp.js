// SignUp.js
import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import firebase from 'firebase';
import {AlertApp} from '../untils/AlertApp';
import FirebaseConst from '../common/FilebaseConst';
import StyleApp from '../theme';

export default class SignUp extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleSignUp = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(FirebaseConst);
    else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          AlertApp('Success', 'SignUp success!');
          this.props.navigation.navigate('LoginApp');
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          AlertApp('Error', errorMessage);
          // ...
        });
    }
  };
  render() {
    return (
      <View style={StyleApp.StyleSignUp.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={StyleApp.StyleSignUp.textInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={StyleApp.StyleSignUp.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('LoginApp')}
        />
      </View>
    );
  }
}
