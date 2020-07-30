import {LOAD_DATA} from '../../store/actionTypes/action.const';
import {onLoad} from '../../store/actionTypes/Main.action';
import {resetData} from '../../store/actionTypes/AddTodoList.action';

class HandleMain {
  mapDispatchToProps = (dispatch) => {
    return {
      onLoad: (uid) => onLoad(dispatch, uid),
      resetData: () => resetData(dispatch),
    };
  };

  mapStateToProps = (state) => {
    return {
      error: state.main.error,
      arrData: state.main.arrData,
      uid: state.login.uid,
      isLoad: state.addTodoList.isLoad,
    };
  };
}

export default new HandleMain();
