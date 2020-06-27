import firebase from 'firebase';
import {AlertApp} from '../../lib/utils/AlertApp';
import FirebaseConst from '../../lib/cons/FilebaseConst';

class HandleSignUp {
  handleSignUp = (email, password) => {
    if (firebase.apps.length === 0) firebase.initializeApp(FirebaseConst);
    else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          AlertApp('Success', 'SignUp success!');
          this.props.navigation.navigate('LoginApp');
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          AlertApp('Error', errorMessage);
          // ...
        });
    }
  };
}

export default new HandleSignUp();
