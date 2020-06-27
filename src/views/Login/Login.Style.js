import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import {MARGIN_MEDIUM,FONT_SIZE_MEDIUM} from '../../styles/sizes';
import {TEXT_BUTTON} from '../../styles/colors';
const styles = StyleSheet.create({
  btnLogin: {
    ...StyleApp.Button.btnPrimary,
    margin: MARGIN_MEDIUM,
  },
  btnSignUp: {
    ...StyleApp.Button.btnPrimary,
  },
  txtLogin: {
    color: TEXT_BUTTON,
    fontSize: FONT_SIZE_MEDIUM,
  },
  txtSignUp: {
    color: TEXT_BUTTON,
    fontSize: FONT_SIZE_MEDIUM,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    ...StyleApp.TextInput.txtNormal,
  },
});

export default styles;
