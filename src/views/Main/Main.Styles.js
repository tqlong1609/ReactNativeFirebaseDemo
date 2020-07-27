import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import * as sizes from '../../styles/sizes';
import * as colors from '../../styles/colors';

const styles = StyleSheet.create({
  animationView: {
    width: sizes.WIDTH_MEDIUM,
    height: sizes.WIDTH_MEDIUM,
    alignSelf: 'center',
  },
  containerTitle: {
    alignSelf: 'center',
  },
  txtTodo: {
    fontSize: sizes.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    marginTop: -50,
  },
  txtLists: {
    color: colors.BACKGROUND_SCREEN,
    fontWeight: sizes.FONT_WEIGHT,
  },
  btnAddList: {
    marginTop: 20,
  },
  iconAdd: {
    fontSize: sizes.FONT_SIZE_ICON_MEDIUM,
    alignSelf: 'center',
    color: colors.BACKGROUND_SCREEN,
  },
  txtAddList: {alignSelf: 'center', color: colors.BACKGROUND_SCREEN},
  container: {
    flex: 1,
  },
  flatList: {
    alignSelf: 'center',
    marginTop: sizes.MARGIN_LARGE,
    height: sizes.HEIGHT_MEDIUM,
  },
});

export default styles;
