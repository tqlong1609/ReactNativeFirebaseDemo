import {StyleSheet} from 'react-native';
import * as colors from '../../styles/colors';
import * as sizes from '../../styles/sizes';
import styleCommon from '../../styles';
const styles = StyleSheet.create({
  btnColorChange: {
    width: sizes.WIDTH_SMALL_1,
    height: sizes.HEIGHT_SMALL_1,
    borderRadius: sizes.BODER_RADIUS_SMALL_1,
  },
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerListBtnColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: sizes.MARGIN_MEDIUM_1,
  },
  title: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: sizes.FONT_SIZE_MEDIUM_LARGE_1,
  },
  inputListName: {
    ...styleCommon.TextInput.txtAddContent,
    marginTop: 10,
  },
  btnCreate: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: sizes.HEIGHT_SMALL_2,
    marginTop: sizes.MARGIN_MEDIUM_1,
    borderRadius: sizes.BODER_RADIUS_SMALL_2,
  },
  txtCreate: {color: 'white', fontWeight: sizes.FONT_WEIGHT_LARGE},
  btnClose: {
    ...styleCommon.Button.btnClose,
  },
  iconClose: {
    fontSize: sizes.FONT_SIZE_ICON_MEDIUM,
    color: colors.ICON_CLOSE,
  },
  animateWork: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: 60,
  },
});

export default styles;
