import {Alert} from 'react-native';

export function AlertApp(title, content) {
  Alert.alert(
    title,
    content,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
}
