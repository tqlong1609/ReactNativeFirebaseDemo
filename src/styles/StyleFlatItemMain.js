// container stylesheet used for entire components
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    margin: 5,
    borderRadius: 2,
  },
  image: {
    flex: 2,
    width: 100,
    height: 100,
    margin: 5,
  },
  containerContent: {
    flex: 6,
    flexDirection: 'column',
  },
  NameText: {
    fontWeight: 'bold',
  },
});

export default Style;
