import LoginReducer from './loginReducer';
import AddItemReducer from './addItemReducer';
import MainReducer from './mainReducer';
import TodoListReducer from './TodoListReducer';
import {combineReducers} from 'redux';
import AddTodoListReducer from './addTodoListReducer';
const reducers = combineReducers({
  login: LoginReducer,
  addItem: AddItemReducer,
  main: MainReducer,
  addTodoList: AddTodoListReducer,
  todoList: TodoListReducer,
});

export default reducers;
