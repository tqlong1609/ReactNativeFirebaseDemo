// SignUp.js
import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import SignUpController from './SignUp.Controller';
import SignUpStyle from './SignUp.Style';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', errorMessage: null};
  }

  render() {
    return (
      <View style={SignUpStyle.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={SignUpStyle.textInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={SignUpStyle.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          title="Sign Up"
          onPress={() =>
            SignUpController.handleSignUp(this.state.email, this.state.password)
          }
        />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('LoginApp')}
        />
      </View>
    );
  }
}
