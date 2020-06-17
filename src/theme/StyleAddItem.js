import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
  btnUpload: {
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 3,
    alignItems: 'center',
    width: 80,
    height: 40,
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
    flex: 5,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    marginRight: 10,
  },
  containerButton: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnAdd: {
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 100,
    alignItems: 'center',
    width: 80,
    height: 40,
  },
});

export default Style;
