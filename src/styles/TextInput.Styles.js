import {StyleSheet} from 'react-native';
import {BODER_BOTTOM_INPUT} from './colors';
import {PADDING_MEDIUM, PADDING_MEDIUM_1} from './sizes';

const Styles = StyleSheet.create({
  txtNormal: {
    height: 50,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: BODER_BOTTOM_INPUT,
    alignSelf: 'center',
  },
});

export default Styles;
