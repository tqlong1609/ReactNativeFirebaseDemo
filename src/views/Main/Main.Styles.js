import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import {MARGIN_SMALL,FONT_SIZE_MEDIUM} from '../../styles/sizes';
import {TEXT_BUTTON} from '../../styles/colors';
const styles = StyleSheet.create({
  btnAdd: {
    ...StyleApp.Button.btnPrimary,
    width: 100,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: MARGIN_SMALL,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnChangeLanguaes:{
    ...StyleApp.Button.btnPrimary,
    width: 200,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: MARGIN_SMALL,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default styles;
