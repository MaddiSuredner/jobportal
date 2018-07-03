import React from 'react';
import  {NavLink, Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      	<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-danger">
		  <Link className="navbar-brand" to="/">Verizon</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
		  		aria-controls="navbarNav" aria-expanded="false" 
		  		aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
		    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
		      <li className="nav-item active">
		      	<div className="nav-link">
		        	<NavLink to="/">Home</NavLink>
		        </div>
		      </li>
		      <li className="nav-item">
		      	<div className="nav-link">
		        	<NavLink to="/features">Features</NavLink>
		        </div>
		      </li>
		      <li className="nav-item">
		      	<div className="nav-link">
		        	<NavLink to="/search">Search</NavLink>
		        </div>
		      </li>
		      <li className="nav-item float-right">
		      	<div className="nav-link">
		        	<NavLink to="/login">Login</NavLink>
		        </div>
		      </li>
		    </ul>
		  </div>
		</nav>
    );
  }
}

export default Header;
