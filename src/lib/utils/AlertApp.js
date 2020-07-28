import {Alert} from 'react-native';

export function AlertApp(title, content, callback) {
  console.log('qweqweqe');
  console.log('1123132123');
  console.log('1123132123');
  console.log('qweqe');
  console.log('1123132123');
  console.log('1123132123');
  Alert.alert(
    title,
    content,
    [
      {
        text: 'Cancel 2123123',
        onPress: () => callback('Cancel 123123'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => callback('OK 123131231')},
    ],
    {cancelable: false},
  );
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  
}
