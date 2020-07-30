// import {LOAD_DATA} from '../../store/actionTypes/action.const';
import {onDelete} from '../store/actionTypes/TodoList.action';
// import {resetUpdateData} from '../../store/actionTypes/AddTodoList.action';

class HandleTodoList {
  mapDispatchToProps = (dispatch) => {
    return {onDelete: (uid, idDelete) => onDelete(dispatch, uid, idDelete)};
  };

  mapStateToProps = (state) => {
    return {};
  };
}

export default new HandleTodoList();
