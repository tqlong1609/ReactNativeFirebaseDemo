import {SIGN_UP, RESET_STATE_SIGN_UP} from '../../store/actionTypes';
import {
  ERROR_EMPTY_INPUT,
  ERROR_NOT_CONFIRM_PASSWORD,
} from '../../lib/configs/nameErrors';
class HandleSignUp {
  mapDispatchToProps = (dispatch) => {
    return {
      resetData: () =>
        dispatch({
          type: RESET_STATE_SIGN_UP,
        }),
      onSignUp: (name, emailVal, passwordVal) =>
        dispatch({
          type: SIGN_UP,
          value: {name: name, email: emailVal, password: passwordVal},
        }),
    };
  };

  mapStateToProps = (state) => {
    return {
      errorMessage: state.signUp.error,
      isSignUp: state.signUp.isSignUp,
    };
  };

  checkEmptyInput = (name, email, password, confirmPassword) => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      throw Error(ERROR_EMPTY_INPUT);
    }
  };

  checkConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) throw Error(ERROR_NOT_CONFIRM_PASSWORD);
  };
}

export default new HandleSignUp();
