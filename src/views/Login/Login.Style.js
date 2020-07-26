import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import * as Color from '../../styles/colors';
import * as Size from '../../styles/sizes';
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  txtError: {...StyleApp.Text.textError},
  imageLogo: {
    ...StyleApp.Icon.iconLogo,
  },
  pickerLanguage: {
    ...StyleApp.Picker.pickerDefault,
  },

  btnLogin: {
    ...StyleApp.Button.btnPrimary,
    marginTop: Size.MARGIN_LARGE,
  },
  txtLogin: {
    ...StyleApp.Text.textDefault,
  },
  btnSignUp: {
    marginTop: Size.MARGIN_MEDIUM,
  },
  txtSignUp: {
    ...StyleApp.Text.textUnderline,
    marginBottom: Size.MARGIN_LARGE,
  },
  btnFacebook: {
    ...StyleApp.Button.btnPrimary,
    marginTop: Size.MARGIN_MEDIUM,
    backgroundColor: Color.SHINING_FACEBOOK,
  },
  iconFacebook: {
    ...StyleApp.Icon.iconDefault,
    color: Color.FACEBOOK,
  },
  iconLogin: {
    ...StyleApp.Icon.iconDefault,
  },

  txtFacebook: {
    ...StyleApp.Text.textDefault,
  },
  containerTextInput: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
  textInputLogin: {
    ...StyleApp.TextInput.txtNormal,
  },
});

export default styles;
