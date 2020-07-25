import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import {
  MARGIN_MEDIUM,
  FONT_SIZE_MEDIUM,
  BODER_MEDIUM,
  HEIGHT_SMALL_MEDIUM,
  MARGIN_LARGE,
} from '../../styles/sizes';
import {TEXT_BUTTON, BACKGROUND_SCREEN} from '../../styles/colors';
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
    width: 150,
    alignSelf: 'center',
  },

  btnLogin: {
    ...StyleApp.Button.btnPrimary,
    alignSelf: 'center',
    width: '90%',
    marginTop: MARGIN_MEDIUM,

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
    color: 'black',
    fontSize: FONT_SIZE_MEDIUM,
    alignSelf: 'center',
  },
  btnFacebook: {
    ...StyleApp.Button.btnPrimary,
    alignSelf: 'center',
    width: '90%',
    borderRadius: BODER_MEDIUM,
    marginTop: MARGIN_MEDIUM,
    height: HEIGHT_SMALL_MEDIUM,
    backgroundColor: '#4267B2',
  },
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textInputEmail: {
    ...StyleApp.TextInput.txtNormal,
    alignSelf: 'center',
  },
  textInputPassword: {
    ...StyleApp.TextInput.txtNormal,
    alignSelf: 'center',
    marginTop: MARGIN_MEDIUM,
    marginBottom: MARGIN_LARGE,
  },
});

export default styles;
