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
import {SIGN_UP_SCREEN} from '../../lib/configs/nameScreen';
import {Picker} from '@react-native-community/picker';
import LottieView from 'lottie-react-native';
import {OverLayLoading} from '../../containers/OverlayLoading';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {withTranslation} from 'react-i18next';
import Header from '../../containers/Header';
import * as Const from '../../lib/const/Languages.const';

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
      uriImageFlag: Const.listLanguages[0],
    };
  }

  static getDerivedStateFromProps(_props, _state) {
    return {error: _props.error, logined: _props.logine};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return LoginController.checkLogin(this, nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading) {
      LoginController.hideLoading(this);
    }
  }

  render() {
    const {t, tReady} = this.props;
    return (
      <View style={LoginStyle.container}>
        {this.state.isLoading && <OverLayLoading />}
        <ScrollView style={LoginStyle.scrollContainer}>
          <Header title={t('Login')} />
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
              placeholder={t('Email')}
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
              placeholder={t('Password')}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            style={LoginStyle.btnLogin}
            onPress={() => LoginController.onSignIn(this)}>
            <Text style={LoginStyle.txtLogin}>{t('Login')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={LoginStyle.btnFacebook}
            onPress={() => LoginController.onSignInWithFacebook(this)}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="facebook" style={LoginStyle.iconFacebook} />
              <Text style={LoginStyle.txtFacebook}>
                {t('Login with facebook')}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={LoginStyle.btnSignUp}
            onPress={() => this.props.navigation.navigate(SIGN_UP_SCREEN)}>
            <Text style={LoginStyle.txtSignUp}>
              {t("Don't have an account? Sign Up")}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image
              source={this.state.uriImageFlag}
              style={{width: 35, height: 35, alignSelf: 'center'}}
            />
            <Picker
              selectedValue={this.state.selectedValue}
              style={LoginStyle.pickerLanguage}
              onValueChange={(itemValue, itemIndex) =>
                LoginController.setSelectedValue(this, itemValue)
              }>
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Vietnamese" value="vi" />
            </Picker>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default connect(
  LoginController.mapStateToProps,
  LoginController.mapDispatchToProps,
)(withTranslation()(Login));
