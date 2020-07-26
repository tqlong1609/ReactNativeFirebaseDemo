// Login.js
import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import LoginStyle from './Login.Style';
import LoginController from './Login.Controller';
import {connect} from 'react-redux';
import {SIGN_UP_SCREEN, MAIN_SCREEN} from '../../lib/configs/nameScreen';
import {translate} from '../../lib/locales';
import {Picker} from '@react-native-community/picker';
import LottieView from 'lottie-react-native';
import {OverLayLoading} from '../../containers/OverlayLoading';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
      isLoading: false,
    };
  }

  static getDerivedStateFromProps(_props, _state) {
    return {error: _props.error, logined: _props.logine};
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.logined) {
      nextState.isLoading = false;
      this.props.resetData();
      this.props.navigation.navigate(MAIN_SCREEN);
      return false;
    }
    return true;
  }
  hideLoading = () => {
    this.setState({isLoading: false});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading) {
      this.hideLoading();
    }
  }
  onSignIn = () => {
    this.setState({isLoading: true, error: ''});
    this.props.resetData();
    this.props.onSignIn(this.state.email, this.state.password);
  };
  onSignInWithFacebook = () => {
    this.setState({isLoading: true, error: ''});
    this.props.resetData();
    this.props.onClickFacebook();
  };

  setSelectedValue = (itemValue) => {
    this.setState({selectedValue: itemValue});
  };

  render() {
    return (
      <View style={LoginStyle.container}>
        {this.state.isLoading && <OverLayLoading />}
        <ScrollView style={LoginStyle.scrollContainer}>
          <LottieView
            style={LoginStyle.imageLogo}
            source={require('../../assets/json/19782-listening-to-music.json')}
            autoPlay
            loop
          />
          {this.state.error !== '' && (
            <Text style={LoginStyle.txtError}>{this.state.error}</Text>
          )}
          <View style={LoginStyle.containerTextInput}>
            <Icon name="envelope" style={LoginStyle.iconLogin} />
            <TextInput
              style={LoginStyle.textInputLogin}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              placeholder={translate('Email')}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </View>
          <View style={LoginStyle.containerTextInput}>
            <Icon name="lock" style={LoginStyle.iconLogin} />
            <TextInput
              secureTextEntry
              style={LoginStyle.textInputLogin}
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder={translate('Password')}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            style={LoginStyle.btnLogin}
            onPress={() => this.onSignIn()}>
            <Text style={LoginStyle.txtLogin}>{translate('Login')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={LoginStyle.btnFacebook}
            onPress={() => this.onSignInWithFacebook()}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="facebook" style={LoginStyle.iconFacebook} />
              <Text style={LoginStyle.txtFacebook}>Login with facebook</Text>
            </View>
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
            style={LoginStyle.pickerLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setSelectedValue(itemValue)
            }>
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Vietnamese" value="vi" />
          </Picker>
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  LoginController.mapStateToProps,
  LoginController.mapDispatchToProps,
)(Login);
