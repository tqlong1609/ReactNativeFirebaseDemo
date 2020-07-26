import {SIGN_UP, RESET_STATE_SIGN_UP} from '../../store/actionTypes';
import {MAIN_SCREEN} from '../../lib/configs/nameScreen';

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

  hideLoading = (context) => {
    context.setState({isLoading: false, errorMessage: ''});
  };

  checkSignUp = (context, nextProps, nextState) => {
    if (nextProps.isSignUp) {
      nextState.isLoading = false;
      context.props.resetData();
      context.props.navigation.navigate(MAIN_SCREEN);
      return false;
    }
    return true;
  };

  onSignUp = (context) => {
    try {
      this.checkEmptyInput(
        context.state.name,
        context.state.email,
        context.state.password,
        context.state.confirmPassword,
      );
      this.checkConfirmPassword(
        context.state.password,
        context.state.confirmPassword,
      );
      context.setState({isLoading: true, error: ''});
      context.props.resetData();
      context.props.onSignUp(
        context.state.name,
        context.state.email,
        context.state.password,
      );
    } catch (error) {
      let errorMessage = error.toString();
      console.log(errorMessage);
      context.setState({errorMessage: errorMessage});
    }
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
