import {StyleSheet} from 'react-native';
import * as Colors from './colors';
import * as Sizes from './sizes';

const Styles = StyleSheet.create({
  btnPrimary: {
    paddingBottom: Sizes.PADDING_MEDIUM,
    paddingTop: Sizes.PADDING_MEDIUM,
    paddingLeft: Sizes.PADDING_MEDIUM_1,
    paddingRight: Sizes.PADDING_MEDIUM_1,
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
  btnSave: {
    position: 'absolute',
    left: 10,
    top: 5,
    backgroundColor: Colors.BACKGROUND_SCREEN,
    width: Sizes.WIDTH_SMALL_3,
    height: Sizes.HEIGHT_SMALL_3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.BODER_MEDIUM,
  },
});

export default Styles;
