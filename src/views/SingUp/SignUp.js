// SignUp.js
import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SignUpController from './SignUp.Controller';
import SignUpStyle from './SignUp.Style';
import {LOGIN_SCREEN, MAIN_SCREEN} from '../../lib/configs/nameScreen';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import {OverLayLoading} from '../../containers/OverlayLoading';
import {withTranslation} from 'react-i18next';
import Header from '../../containers/Header';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      isSignUp: false,
      isLoading: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return SignUpController.checkSignUp(this, nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading) {
      SignUpController.hideLoading(this);
    }
  }

  static getDerivedStateFromProps(_props, _state) {
    if (
      _props.errorMessage === _state.errorMessage ||
      _state.errorMessage === ''
    ) {
      return {errorMessage: _props.errorMessage, isSignUp: _props.isSignUp};
    }
    return null;
  }

  render() {
    const {t, tReady} = this.props;
    return (
      <View style={SignUpStyle.container}>
        {this.state.isLoading && <OverLayLoading />}
        <ScrollView style={SignUpStyle.scrollContainer}>
          <Header title={t('Sign Up')} />
          <LottieView
            style={SignUpStyle.imageLogo}
            source={require('../../assets/json/11067-registration-animation.json')}
            autoPlay
            loop
          />
          {this.state.errorMessage !== '' && (
            <Text style={SignUpStyle.textError}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            placeholder={t('Name')}
            style={SignUpStyle.textInput}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            placeholder={t('Email')}
            keyboardType="email-address"
            style={SignUpStyle.textInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder={t('Password')}
            autoCapitalize="none"
            style={SignUpStyle.textInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TextInput
            secureTextEntry
            placeholder={t('Confirm Password')}
            autoCapitalize="none"
            style={SignUpStyle.textInput}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            value={this.state.confirmPassword}
          />
          <TouchableOpacity
            style={SignUpStyle.btnSignUp}
            onPress={() => SignUpController.onSignUp(this)}>
            <Text style={SignUpStyle.txtSignUp}>{t('Sign Up')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={SignUpStyle.btnLogin}
            onPress={() => this.props.navigation.navigate(LOGIN_SCREEN)}>
            <Text style={SignUpStyle.txtLogin}>
              {t('Do you have an account? Login')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default connect(
  SignUpController.mapStateToProps,
  SignUpController.mapDispatchToProps,
)(withTranslation()(SignUp));
