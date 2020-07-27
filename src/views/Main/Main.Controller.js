import {LOAD_DATA} from '../../store/actionTypes/action.const';

class HandleMain {
  mapDispatchToProps = (dispatch) => {
    return {
      onLoad: () =>
        dispatch({
          type: LOAD_DATA,
        }),
    };
  };

  mapStateToProps = (state) => {
    return {
      error: state.main.error,
      arrData: state.main.arrData,
    };
  };
}

export default new HandleMain();
