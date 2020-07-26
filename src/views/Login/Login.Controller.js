import {
  SIGN_IN,
  RESET_STATE_SIGN_IN,
  SIGN_IN_WITH_FACEBOOK,
} from '../../store/actionTypes';
import * as Const from '../../lib/const/Languages.const';
import i18n from '../../lib/locales/i18n';
import {MAIN_SCREEN} from '../../lib/configs/nameScreen';

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

  checkLogin = (context,nextProps, nextState) => {
    if (nextProps.logined) {
      nextState.isLoading = false;
      context.props.resetData();
      context.props.navigation.navigate(MAIN_SCREEN);
      return false;
    }
    return true;
  };

  hideLoading = (context) => {
    context.setState({isLoading: false});
  };

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  setSelectedValue = (context, itemValue) => {
    let uriImageFlag = '';
    Const.listLanguages.forEach((element) => {
      if (element.lang === context.state.selectedValue) {
        uriImageFlag = element.urlImage;
      }
    });
    context.setState({selectedValue: itemValue, uriImageFlag: uriImageFlag});
    this.changeLanguage(itemValue);
  };

  onSignIn = (context) => {
    context.setState({isLoading: true, error: ''});
    context.props.resetData();
    context.props.onSignIn(context.state.email, context.state.password);
  };

  onSignInWithFacebook = (context) => {
    context.setState({isLoading: true, error: ''});
    context.props.resetData();
    context.props.onClickFacebook();
  };

  mapStateToProps = (state) => {
    return {
      error: state.login.error,
      logined: state.login.logined,
    };
  };
}

export default new HandleLogin();
