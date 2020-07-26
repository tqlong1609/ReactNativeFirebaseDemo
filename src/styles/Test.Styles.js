import {StyleSheet} from 'react-native';
import * as Color from '../styles/colors';
import * as Size from '../styles/sizes';

const Styles = StyleSheet.create({
  textDefault: {
    color: Color.TEXT_BUTTON,
    fontSize: Size.FONT_SIZE_MEDIUM,
    alignSelf: 'center',
  },
  textUnderline: {
    textDecorationLine: 'underline',
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
  },
  textError: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Styles;
