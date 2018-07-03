import {connect} from 'react-redux';

import Signup from "../components/Signup";
import {loginAction, signUpAction} from "../actions/loginActions";

function mapStateToProps(state, ownProps){
	return {
		fetching:state.login.fecthing,
		loggedIn:state.login.loggedIn,
		error:state.login.error
	};
}

function mapDispatchToProps(dispatch, ownProps){
	return {
		signUpHandler : (formData) => {
			dispatch(signUpAction(formData));
		},
		loginHandler : (username, password, type) => {
			dispatch(loginAction(username, password, type));
		}
	}
}
const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup)

export default SignupContainer;