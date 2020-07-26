import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import * as Color from '../../styles/colors';
import * as Size from '../../styles/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLogo: {...StyleApp.Icon.iconLogo},
  textError: {
    ...StyleApp.Text.textError,
  },
  textInput: {
    ...StyleApp.TextInput.txtNormal,
  },
  btnSignUp: {
    ...StyleApp.Button.btnPrimary,
    marginTop: Size.MARGIN_LARGE,
  },
  txtSignUp: {
    ...StyleApp.Text.textDefault,
  },
  txtLogin: {
    ...StyleApp.Text.textUnderline,
  },
  btnLogin: {marginTop: Size.MARGIN_MEDIUM},
});

export default styles;
