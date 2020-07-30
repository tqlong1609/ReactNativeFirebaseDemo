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

  getStateFromProps = (_props, _state) => {
    if (_props.isLoad || _props.isSuccess) {
      _props.onLoad(_props.uid);
      _props.resetData();
      return {data: _props.arrData, error: _props.error, isLoading: true};
    }
    return {data: _props.arrData, error: _props.error};
  }
  loadData = (context) => {
    context.setState({isLoading: true, error: ''});
    context.props.onLoad(context.props.uid);
  };
  
}

export default new HandleMain();
