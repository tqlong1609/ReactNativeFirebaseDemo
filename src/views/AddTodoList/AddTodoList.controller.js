import {getId} from '../../lib/utils/GetIdTimer';
import {saveTodos, resetData} from '../../store/actionTypes/AddTodoList.action';
class HandleAddTodoList {
  updateCountTasks = (context) => {
    const isCheckCount = this.countIsCheck(context.state.dataTodos);
    context.setState({completedCount: isCheckCount});
  };
  countIsCheck = (dataTodos) => {
    const isCheckCount = dataTodos.filter((item) => item.isCheck).length;
    return isCheckCount;
  };

  addTodo = (context) => {
    const id = getId();
    let {dataTodos} = context.state;
    dataTodos.push({id: id, content: context.state.todo, isCheck: true});
    context.updateIsCheckItem(id, false);
    context.setState({todo: ''});
  };
  checkAddTodo = (context, nextProps, nextState) => {
    if (nextProps.isSuccess) {
      nextState.isSuccess = false;
      context.props.resetData();
      context.props.onCloseModal();
      // context.props.navigation.navigate(MAIN_SCREEN);
      return false;
    }
    return true;
  };
  hideLoading = (context) => {
    context.setState({isLoading: false, errorMessage: ''});
  };
  mapDispatchToProps = (dispatch) => {
    return {
      resetData: () => resetData(dispatch),
      saveDataTodos: (todos) => saveTodos(dispatch, todos),
    };
  };
  onAddTodo = (context) => {
    try {
      context.setState({isLoading: true, error: ''});
      context.props.resetData();
      context.props.saveDataTodos({
        uid: context.props.uid,
        listName: context.props.listName,
        backgroundColor: context.props.backgroundColor,
        listTodo: context.state.dataTodos,
      });
    } catch (error) {
      let errorMessage = error.toString();
      console.log(errorMessage);
      context.setState({errorMessage: errorMessage});
    }
  };
  mapStateToProps = (state) => {
    return {
      error: state.addTodoList.error,
      isSuccess: state.addTodoList.isSuccess,
      uid: state.login.uid,
    };
  };
}

export default new HandleAddTodoList();
