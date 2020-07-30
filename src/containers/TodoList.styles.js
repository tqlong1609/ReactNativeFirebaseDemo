import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {width: 200, marginHorizontal: 12, borderRadius: 6},
  iconDelete: {fontSize: 30, paddingTop: 5, paddingLeft: 5, color: '#CC0000'},
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
  },
  containerContent: {
    alignItems: 'center',
    marginTop: 5,
  },
  count: {
    fontSize: 35,
    color: 'white',
  },
  txtContent: {
    fontWeight: '700',
    color: 'white',
    fontSize: 12,
  },
});

export default styles;
