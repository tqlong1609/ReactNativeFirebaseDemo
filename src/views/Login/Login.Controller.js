import firebase from 'firebase';
import {AlertApp} from '../../lib/utils/AlertApp';
import {SIGN_IN} from '../../store/actionTypes';

class HandleLogin {
  signIn = (email, password) => {
    firebases
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('MainApp');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        AlertApp(errorCode, errorMessage);
      });
  };

  handleLogin = (email, password) => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(FirebaseConst.FilebaseConst);
      this.signIn(email, password);
    } else {
      this.signIn(email, password);
    }
  };

  mapDispatchToProps = (dispatch) => {
    return {
      onSignIn: (emailVal, passwordVal) =>
        dispatch({
          type: SIGN_IN,
          value: {email: emailVal, password: passwordVal},
        }),
    };
  };

  mapStateToProps = (state) => {
    return {
      error: state.login.error,
      logined: state.login.logined,
    };
  };
}

export default new HandleLogin();
