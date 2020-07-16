import {SIGN_IN,RESET_STATE_SIGN_IN} from '../../store/actionTypes';

class HandleLogin {
  mapDispatchToProps = (dispatch) => {
    return {
      resetData: () =>
        dispatch({
          type: RESET_STATE_SIGN_IN,
        }),
      onSignIn: (emailVal, passwordVal) =>
        dispatch({
          type: SIGN_IN,
          value: {email: emailVal, password: passwordVal},
        }),
    };
  };

  mapStateToProps = (state) => {
    // console.log(state);
    return {
      error: state.login.error,
      logined: state.login.logined,
    };
  };
}

export default new HandleLogin();
