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
import {AlertApp} from '../../lib/utils/AlertApp';
import {translate} from '../../lib/locales';
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
    if (nextProps.isSignUp) {
      nextState.isLoading = false;
      this.props.resetData();
      this.props.navigation.navigate(MAIN_SCREEN);
      return false;
    }
    return true;
  }
  hideLoading = () => {
    this.setState({isLoading: false, errorMessage: ''});
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading) {
      this.hideLoading();
    }
  }
  static getDerivedStateFromProps(_props, _state) {
    console.log('_prop: ' + _props.errorMessage);
    console.log('_state: ' + _state.errorMessage);

    if (
      _props.errorMessage === _state.errorMessage ||
      _state.errorMessage === ''
    ) {
      return {errorMessage: _props.errorMessage, isSignUp: _props.isSignUp};
    }
    console.log(_props.errorMessage);
    return null;
  }

  onSignUp = () => {
    try {
      SignUpController.checkEmptyInput(
        this.state.name,
        this.state.email,
        this.state.password,
        this.state.confirmPassword,
      );
      SignUpController.checkConfirmPassword(
        this.state.password,
        this.state.confirmPassword,
      );
      this.setState({isLoading: true, error: ''});
      this.props.resetData();
      this.props.onSignUp(
        this.state.name,
        this.state.email,
        this.state.password,
      );
    } catch (error) {
      let errorMessage = error.toString();
      console.log(errorMessage);
      this.setState({errorMessage: errorMessage});
    }
  };

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
            autoCapitalize="none"
            style={SignUpStyle.textInput}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            placeholder={translate('Email')}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
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
            placeholder={t('Confirm Password')}
            autoCapitalize="none"
            style={SignUpStyle.textInput}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            value={this.state.confirmPassword}
          />
          <TouchableOpacity
            style={SignUpStyle.btnSignUp}
            onPress={() => this.onSignUp()}>
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
