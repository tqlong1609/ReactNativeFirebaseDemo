import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import {TEXT_BUTTON} from '../../styles/colors';
import {MARGIN_MEDIUM, FONT_SIZE_MEDIUM} from '../../styles/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    ...StyleApp.TextInput.txtNormal,
  },
  btnSignUp: {
    ...StyleApp.Button.btnPrimary,
    margin: MARGIN_MEDIUM,
  },
  btnLogin: {
    ...StyleApp.Button.btnPrimary,
  },
  txtSignUp: {
    color: TEXT_BUTTON,
    fontSize: FONT_SIZE_MEDIUM,
  },
  txtLogin: {
    color: TEXT_BUTTON,
    fontSize: FONT_SIZE_MEDIUM,
  },
});

export default styles;
