import LoginReducer from './loginReducer';
import SignUpReducer from './signUpReducer';
import AddItemReducer from './addItemReducer';
import MainReducer from './mainReducer';
import {combineReducers} from 'redux';
const reducers = combineReducers({
  login: LoginReducer,
  signUp: SignUpReducer,
  addItem: AddItemReducer,
  main: MainReducer,
});

export default reducers;
