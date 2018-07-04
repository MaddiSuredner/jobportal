import React from 'react';
import  {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends React.Component {
  render() {
  	
    return (
      	<nav className={(this.props.loggedIn && this.props.userinfo.usertype == "emp")?"navbar navbar-expand-lg fixed-top navbar-dark bg-primary":"navbar navbar-expand-lg fixed-top navbar-dark bg-danger"}>
		  <Link className="navbar-brand" to="/">Verizon</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
		  		aria-controls="navbarNav" aria-expanded="false" 
		  		aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		      	<div className="nav-link">
		        	<NavLink to="/">Home</NavLink>
		        </div>
		      </li>
		       {
		      		(this.props.loggedIn && this.props.userinfo.usertype == "user") ? 
		      		<li className="nav-item">
			      		<div className="nav-link">
			        		<NavLink to="/apply">Apply Jobs</NavLink>
			        	</div>
		      		</li>
		        	:null
		       }
		       {
		      		(this.props.loggedIn && this.props.userinfo.usertype == "emp") ? 
		      		<li className="nav-item">
			      		<div className="nav-link">
			        		<NavLink to="/postjob">Post New Jobs</NavLink>
			        	</div>
		      		</li>
		        	:null
		       }
		       {
		      		(!this.props.loggedIn) ? 
		      		<li className="nav-item">
			      		<div className="nav-link">
			        		<NavLink to="/search">Search</NavLink>
			        	</div>
		      		</li>
		        	:null
		       }
		       {
		      		(this.props.loggedIn && this.props.userinfo.usertype == "user") ? 
		      		<li className="nav-item">
			      		<div className="nav-link">
			        		<NavLink to="/profile">Profile</NavLink>
			        	</div>
		      		</li>
		        	:null
		       }		      
		    </ul>
		    <span class="navbar-text">
		      	
		      		{(this.props.loggedIn) ?
		      		<NavLink to="/logout">Welcome ({this.props.userinfo.username}), Logout </NavLink>:
		        	<NavLink to="/login">Login</NavLink>}
		       
		    </span>
		  </div>
		</nav>
    );
  }
}

function mapStateToProps(state, ownProps){
	return {
		loggedIn: state.login.loggedIn,
		userinfo: state.login.userinfo
	};
}
const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;
