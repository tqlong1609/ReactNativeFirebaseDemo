import {StyleSheet} from 'react-native';
import * as Color from '../styles/colors';

const Styles = StyleSheet.create({
  iconDefault: {
    color: Color.BACKGROUND_SCREEN,
    fontSize: 30,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  iconLogo: {
    width: 250,
    height: 250,
    marginBottom: -20,
    alignSelf: 'center',
  }
});

export default Styles;
