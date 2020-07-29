import {getId} from '../../lib/utils/GetIdTimer';

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
  
}

export default new HandleAddTodoList();
