import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON} from './colors';
import {PADDING_MEDIUM, PADDING_MEDIUM_1,BODER_MEDIUM,HEIGHT_SMALL_MEDIUM} from './sizes';

const Styles = StyleSheet.create({
  btnPrimary: {
    paddingBottom: PADDING_MEDIUM,
    paddingTop: PADDING_MEDIUM,
    paddingLeft: PADDING_MEDIUM_1,
    paddingRight: PADDING_MEDIUM_1,
    // backgroundColor: BACKGROUND_BUTTON,
    alignSelf: 'center',
    width: '90%',
    borderRadius: BODER_MEDIUM,
    height: HEIGHT_SMALL_MEDIUM,
    backgroundColor: BACKGROUND_BUTTON,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
