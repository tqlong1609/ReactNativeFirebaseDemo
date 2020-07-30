import {onDelete} from '../store/actionTypes/TodoList.action';

class HandleTodoList {
  mapDispatchToProps = (dispatch) => {
    return {onDelete: (uid, idDelete) => onDelete(dispatch, uid, idDelete)};
  };

  mapStateToProps = (state) => {
    return {};
  };
  deleteTodo = (context) => {
    context.props.onDelete(context.props.uid, context.props.idChoose);
  };
  changeModalVisible = (context) => {
    context.setState({modalVisible: !context.state.modalVisible});
  };
}

export default new HandleTodoList();
