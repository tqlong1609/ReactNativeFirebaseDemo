import LoginReducer from './loginReducer';
import {combineReducers} from 'redux';
const reducers = combineReducers({login: LoginReducer});

export default reducers;
