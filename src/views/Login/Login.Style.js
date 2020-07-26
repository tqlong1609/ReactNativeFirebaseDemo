import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import * as Color from '../../styles/colors';
import {
  MARGIN_MEDIUM,
  FONT_SIZE_MEDIUM,
  BODER_MEDIUM,
  HEIGHT_SMALL_MEDIUM,
  MARGIN_LARGE,
} from '../../styles/sizes';
import {TEXT_BUTTON, BACKGROUND_SCREEN} from '../../styles/colors';
import Styles from '../../styles/Button.Styles';
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  txtError: {color: 'red', textAlign: 'center'},
  imageLogo: {
    width: 250,
    height: 250,
    marginBottom: -20,
    alignSelf: 'center',
  },
  pickerLanguage: {
    marginTop: MARGIN_MEDIUM,
    height: 50,
    width: 200,
    alignSelf: 'center',
  },

  btnLogin: {
    ...StyleApp.Button.btnPrimary,
    alignSelf: 'center',
    width: '90%',
    marginTop: MARGIN_LARGE,
    borderRadius: BODER_MEDIUM,
    height: HEIGHT_SMALL_MEDIUM,
  },
  txtLogin: {
    color: TEXT_BUTTON,
    fontSize: FONT_SIZE_MEDIUM,
    alignSelf: 'center',
  },
  btnSignUp: {
    alignSelf: 'center',
    marginTop: MARGIN_MEDIUM,
  },
  txtSignUp: {
    textDecorationLine:'underline',
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
  },
  btnFacebook: {
    ...StyleApp.Button.btnPrimary,
    alignSelf: 'center',
    width: '90%',
    borderRadius: BODER_MEDIUM,
    marginTop: MARGIN_MEDIUM,
    height: HEIGHT_SMALL_MEDIUM,
    backgroundColor: '#6482C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFacebook: {
    ...StyleApp.Icon.iconDefault,
    color: Color.FACEBOOK,
    fontSize: 30,
    alignSelf: 'center',
  },
  iconEmail: {
    ...StyleApp.Icon.iconDefault,
    color: Color.BACKGROUND_SCREEN,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  txtFacebook: {
    color: 'white',
    fontSize: FONT_SIZE_MEDIUM,
    alignSelf: 'center',
    marginLeft: MARGIN_MEDIUM,
    marginRight: MARGIN_MEDIUM,
  },
  containerTextInput: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
  textInputEmail: {
    ...StyleApp.TextInput.txtNormal,
    alignSelf: 'center',
  },
  textInputPassword: {
    ...StyleApp.TextInput.txtNormal,
    alignSelf: 'center',
  },
});

export default styles;
