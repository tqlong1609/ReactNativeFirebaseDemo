import {StyleSheet} from 'react-native';
import StyleApp from '../../styles';
import {MARGIN_MEDIUM, FONT_SIZE_MEDIUM} from '../../styles/sizes';
import {TEXT_BUTTON} from '../../styles/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    resizeMode: 'stretch',
  },
  btnUpload: {
    ...StyleApp.Button.btnPrimary,
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 3,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerContent: {
    marginTop: 50,
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 30,
  },
  textHeader: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 10,
  },
  textContent: {
    ...StyleApp.TextInput.txtNormal,
    flex: 5,
    marginRight: 10,
  },
  btnAdd: {
    ...StyleApp.Button.btnPrimary,
    justifyContent: 'center',
    marginTop: 100,
    alignItems: 'center',
    width: 80,
    height: 40,
  },
  containerButton: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
