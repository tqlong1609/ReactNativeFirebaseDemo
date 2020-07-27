import firebase from 'firebase';
import Config from '../../../lib/configs/firebaseConfig';
import Const from '../../../lib/const/Filebase.const';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

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
  };
  pushData = (data) => {
    const dataPush = {Profile: data};
    return firebase
      .database()
      .ref(Const.NameUserRoot)
      .push(dataPush)
      .then((response) => response);
  };
  loadData = () => {
    return firebase.database().ref(Const.NameRoot);
  };
}
export default new FirebaseServices();
