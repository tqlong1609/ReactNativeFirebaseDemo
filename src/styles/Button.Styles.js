import {StyleSheet} from 'react-native';
import * as Colors from './colors';
import * as Sizes from './sizes';

const Styles = StyleSheet.create({
  btnPrimary: {
    paddingBottom: Sizes.PADDING_MEDIUM,
    paddingTop: Sizes.PADDING_MEDIUM,
    paddingLeft: Sizes.PADDING_MEDIUM_1,
    paddingRight: Sizes.PADDING_MEDIUM_1,
    // backgroundColor: BACKGROUND_BUTTON,
    alignSelf: 'center',
    width: '90%',
    borderRadius: Sizes.BODER_MEDIUM,
    height: Sizes.HEIGHT_SMALL_MEDIUM,
    backgroundColor: Colors.BACKGROUND_BUTTON,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnClose: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
});

export default Styles;
