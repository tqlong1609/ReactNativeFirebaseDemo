import firebase from 'firebase';
import Config from '../../../lib/configs/firebaseConfig';
import Const from '../../../lib/const/Filebase.const';
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
