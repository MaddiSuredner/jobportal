import React from 'react';
import {Redirect} from 'react-route-dom'
import {connect} from 'react-redux';

import {logoutAction} from "../actions/logingActions";

class Logout extends React.Component {
	componentDidMount(){
		this.props.dispatch(logoutAction());
	}
	 render() {
	    return (<Redirect to="/" />);
	  }
}
const LogoutContainer =  connect()(Logout);

export default LogoutContainer;
