import {connect} from 'react-redux';

import Login from "../components/Login";
import {loginAction} from "../actions/loginActions";

function mapStateToProps(state, ownProps){
	return {
		fetching:state.login.fecthing,
		loggedIn:state.login.loggedIn,
		error:state.login.error
	};
}

function mapDispatchToProps(dispatch, ownProps){
	return {
		loginHandler : (username, password, type) => {
			dispatch(loginAction(username, password, type));
		}
	}
}
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer;