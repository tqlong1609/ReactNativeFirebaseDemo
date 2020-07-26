import {
  SIGN_IN,
  RESET_STATE_SIGN_IN,
  SIGN_IN_WITH_FACEBOOK,
} from '../../store/actionTypes';

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
      onClickFacebook: () =>
        dispatch({
          type: SIGN_IN_WITH_FACEBOOK,
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
