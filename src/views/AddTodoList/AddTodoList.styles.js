import {StyleSheet} from 'react-native';
import styleCommon from '../../styles';
import * as colors from '../../styles/colors';
import * as sizes from '../../styles/sizes';
const styles = StyleSheet.create({
  container: {flex: 1},
  containerContent: {flex: 1},
  containerHeader: {
    marginTop: 30,
    marginLeft: 70,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    marginRight: 20,
    width: 180,
  },
  containerAddTodo: {
    flexDirection: 'row',
    marginBottom: 30,
    alignSelf: 'center',
  },
  btnAdd: {
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animBrain: {width: 120, height: 120, marginRight: 20},
  btnClose: {
    ...styleCommon.Button.btnClose,
  },
  flatTodo: {
    marginLeft: 20,
    marginTop: 20,
  },
  iconClose: {
    fontSize: sizes.FONT_SIZE_ICON_MEDIUM,
    color: colors.ICON_CLOSE,
  },
  txtAddTodo: {
    ...styleCommon.TextInput.txtAddContent,
    width: '73%',
    marginRight: 20,
  },
});

export default styles;
