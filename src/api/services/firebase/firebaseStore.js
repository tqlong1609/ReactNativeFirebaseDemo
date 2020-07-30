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

  saveSetOnFirebase = (data, node) => {
    return firebase
      .database()
      .ref(node)
      .set(data)
      .then((response) => response);
  };

  savePushOnFirebase = (data, node) => {
    return firebase
      .database()
      .ref(node)
      .push(data)
      .then((response) => response);
  };

  pushData = (data) => {
    const node = Const.NameUserRoot + '/' + 'Profile/' + data.uid;
    this.saveSetOnFirebase(data, node);
  };

  saveDataTodo = (data) => {
    const node = Const.NameUserRoot + '/Profile/' + data.uid + '/ListTodo/';
    this.savePushOnFirebase(data, node);
  };

  loadData = (uid) => {
    const node = Const.NameUserRoot + '/Profile/' + uid + '/ListTodo/';
    return firebase.database().ref(node);
  };

  deleteData = (dispatch) => {
    const node =
      Const.NameUserRoot +
      '/Profile/' +
      dispatch.values.uid +
      '/ListTodo/' +
      dispatch.values.idDelete;
    return firebase
      .database()
      .ref(node)
      .remove()
      .then((response) => response);
  };
  
  updateData = (dispatch) => {
    const node =
      Const.NameUserRoot +
      '/Profile/' +
      dispatch.uid +
      '/ListTodo/' +
      dispatch.idChoose +
      '/listTodo/';
    return firebase
      .database()
      .ref(node)
      .set(dispatch.listTodo)
      .then((response) => response);
  };
}
export default new FirebaseServices();
