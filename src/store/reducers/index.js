import LoginReducer from './loginReducer';
import SignUpReducer from './signUpReducer';
import {combineReducers} from 'redux';
const reducers = combineReducers({login: LoginReducer, signUp: SignUpReducer});

export default reducers;
