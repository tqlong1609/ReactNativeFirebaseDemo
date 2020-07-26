import firebase from 'firebase';
import Config from '../../../lib/configs/firebaseConfig';
import Const from '../../../lib/const/Filebase.const';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import {call, put} from 'redux-saga/effects';

class FirebaseServices {
  constructor() {
    if (this.isInit()) {
      this.initFirebase();
    }
  }
  isInit = () => {
    return firebase.app.length === 0 ? false : true;
  };
  initFirebase = () => {
    firebase.initializeApp(Config);
  };
  loginWithEmailAndPassword = (userParam) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(
        userParam.value.email,
        userParam.value.password,
      )
      .then((response) => response);
  };
  signUpWithEmailAndPassword = (userParam) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(
        userParam.value.email,
        userParam.value.password,
      )
      .then((response) => response);
  };
  signUpWithFacebookApi = () => {
    return LoginManager.logInWithPermissions(['public_profile'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.reject(new Error('The user cancelled the request'));
        }
        console.log(
          `Login success with permission: ${result.grantedPermissions.toString()}`,
        );
        return AccessToken.getCurrentAccessToken();
      })
      .then((data) => {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken,
        );
        return firebase.auth().signInWithCredential(credential);
      })
      .then((response) => response);
    // .catch((error) => {
    //   console.log(`Facebook login fail with error ${error}`);
    // });
  };
  loadData = () => {
    return firebase.database().ref(Const.NameRoot);
    // return new Promise((resolve) => {

    //   firebase.database().ref(Const.NameRoot).on('value', resolve);
    // });

    // return data.val();
    // return new Promise(function (resolve, reject) {
    //   firebase
    //     .database()
    //     .ref(Const.NameRoot)
    //     .on('value', (snapshot) => {
    //       const messageObject = snapshot.val();
    //       if (messageObject) {
    //         const messageList = Object.keys(messageObject).map((key) => ({
    //           ...messageObject[key],
    //           uid: key,
    //         }));
    //         // messageList.forEach((value) => console.log(value));
    //         // return messageList;
    //         resolve(messageList);
    //       } else {
    //         console.log('empty');
    //       }
    //     });
    // });
    // firebase
    //   .database()
    //   .ref(Const.NameRoot)
    //   .on('value', (snapshot) => {
    //     const messageObject = snapshot.val();

    //     if (messageObject) {
    //       const messageList = Object.keys(messageObject).map((key) => ({
    //         ...messageObject[key],
    //         uid: key,
    //       }));
    //       // messageList.forEach((value) => console.log(value));
    //       return messageList;
    //     } else {
    //       console.log('empty');
    //     }
    //   });
  };
}
export default new FirebaseServices();
