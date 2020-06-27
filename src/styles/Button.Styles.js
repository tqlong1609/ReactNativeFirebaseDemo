import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON} from './colors';
import {PADDING_MEDIUM, PADDING_MEDIUM_1} from './sizes';

const Styles = StyleSheet.create({
  btnPrimary: {
    paddingBottom: PADDING_MEDIUM,
    paddingTop: PADDING_MEDIUM,
    paddingLeft: PADDING_MEDIUM_1,
    paddingRight: PADDING_MEDIUM_1,
    backgroundColor: BACKGROUND_BUTTON,
    borderRadius: 2,
  },
});

export default Styles;
