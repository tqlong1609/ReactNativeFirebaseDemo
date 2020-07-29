import * as Const from '../../lib/const/Languages.const';
import i18n from '../../lib/locales/i18n';
import {MAIN_SCREEN} from '../../lib/const/Screen.const';

import {
  onSignIn,
  resetData,
  onClickFacebook,
} from '../../store/actionTypes/Login.action';
class HandleLogin {
  checkLogin = (context, nextProps, nextState) => {
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
  mapDispatchToProps = (dispatch) => {
    return {
      resetData: () => resetData(dispatch),
      onSignIn: (emailVal, passwordVal) =>
        onSignIn(dispatch, emailVal, passwordVal),
      onClickFacebook: () => onClickFacebook(dispatch),
    };
  };
  mapStateToProps = (state) => {
    return {
      error: state.login.errorLogin,
      logined: state.login.logined,
    };
  };
}

export default new HandleLogin();
