import {Alert} from 'react-native';

export function AlertApp(title, content, callback) {
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
}
