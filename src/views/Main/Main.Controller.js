import {LOAD_DATA} from '../../store/actionTypes/action.const';
import {onLoad} from '../../store/actionTypes/Main.action';
import {resetUpdateData} from '../../store/actionTypes/AddTodoList.action';

class HandleMain {
  mapDispatchToProps = (dispatch) => {
    return {
      onLoad: (uid) => onLoad(dispatch, uid),
      resetData: () => resetUpdateData(dispatch),
    };
  };

  mapStateToProps = (state) => {
    return {
      error: state.main.error,
      arrData: state.main.arrData,
      uid: state.login.uid,
      isLoad: state.addTodoList.isLoad,
      isSuccess: state.todoList.isSuccess,
    };
  };
}

export default new HandleMain();
