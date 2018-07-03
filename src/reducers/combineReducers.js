import { combineReducers }  from 'redux';
import loginReducer from "./loginReducer";
const crs =  combineReducers({
	login: loginReducer
});
export default crs;