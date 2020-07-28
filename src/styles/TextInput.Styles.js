import {StyleSheet} from 'react-native';
import * as colors from './colors';
import * as sizes from './sizes';

const Styles = StyleSheet.create({
  txtNormal: {
    height: 50,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: sizes.BODER_BOTTOM_INPUT,
    alignSelf: 'center',
  },
  txtAddContent: {
    borderWidth: StyleSheet.hairlineWidth,
    width: '80%',
    paddingHorizontal: 16,
    fontSize: sizes.FONT_SIZE_MEDIUM,
    borderRadius: sizes.BODER_RADIUS_SMALL_2,
    height: sizes.HEIGHT_SMALL_2,
  },
});

export default Styles;
