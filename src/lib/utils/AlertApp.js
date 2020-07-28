import {Alert} from 'react-native';

export function AlertApp(title, content, callback) {
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  Alert.alert(
    title,
    content,
    [
      {
        text: 'Cancel',
        onPress: () => callback('Cancel'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => callback('OK')},
    ],
    {cancelable: false},
  );
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
  console.log('1123132123');
}
