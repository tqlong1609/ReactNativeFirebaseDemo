import firebase from 'firebase';
import Config from '../../../lib/configs/firebaseConfig';

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
  loginWithEmail = (userParam) => {
    console.log('firebase user', userParam);
    // this.initFirebase();
    return firebase
      .auth()
      .signInWithEmailAndPassword(
        userParam.value.email,
        userParam.value.password,
      )
      .then((response) => response);
  };
}
export default new FirebaseServices();
