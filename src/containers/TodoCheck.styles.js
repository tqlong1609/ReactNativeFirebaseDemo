import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerTxtdelete: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtDelete: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: '700',
    width: '100%',
    color: 'white',
  },
  containerAnimated: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  containerContentItem: {flexDirection: 'row', paddingVertical: 10},
  iconCheck: {
    fontSize: 30,
    marginRight: 20,
  },
  txtContent: {
    alignSelf: 'center',
    fontWeight: '700',
  },
});

export default styles;
