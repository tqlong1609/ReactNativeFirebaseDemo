import LoginReducer from './loginReducer';
import SignUpReducer from './signUpReducer';
import AddItemReducer from './addItemReducer';
import {combineReducers} from 'redux';
const reducers = combineReducers({
  login: LoginReducer,
  signUp: SignUpReducer,
  addItem: AddItemReducer,
});

export default reducers;
