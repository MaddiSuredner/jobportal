import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "./Home";
import Search from "./Search";
import LoginContainer from "../containers/LoginContainer";
import Logout from "./Logout";
import SignupContainer from "../containers/SignupContainer";
import AppliedJobs from "./AppliedJobs";

class Body extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{"margin-top":"60px"}}>
      	<Switch>
      		<Route path="/" exact component={Home} />
      		<Route path="/applied" component={AppliedJobs} />
      		<Route path="/search" component={Search} />
      		<Route path="/login" component={LoginContainer} />
      		<Route path="/logout" component={Logout} />
      		<Route path="/signup" component={SignupContainer} />
      	</Switch>
      </div>
    );
  }
}

export default Body;
