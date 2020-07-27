import {MAIN_SCREEN} from '../../lib/const/Screen.const';
import {resetData} from '../../store/actionTypes/SignUp.action';
import {
  ERROR_EMPTY_INPUT,
  ERROR_NOT_CONFIRM_PASSWORD,
} from '../../lib/const/Error.const';
import {onSignUp} from '../../store/actionTypes/SignUp.action';
class HandleSignUp {
  mapDispatchToProps = (dispatch) => {
    return {
      resetData: () => resetData(dispatch),
      onSignUp: (name, emailVal, passwordVal) =>
        onSignUp(dispatch, name, emailVal, passwordVal),
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
