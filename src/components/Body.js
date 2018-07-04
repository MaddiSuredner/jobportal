import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "./Home";
import Search from "./Search";
import LoginContainer from "../containers/LoginContainer";
import Logout from "./Logout";
import SignupContainer from "../containers/SignupContainer";
import AppliedJobs from "./AppliedJobs";
import ProfileContainer from "./Profile";
import PostJobContainer from "./PostJob";

class Body extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{"margin-top":"60px"}}>
      	<Switch>
      		<Route path="/" exact component={Home} />
      		<Route path="/apply" component={AppliedJobs} />
      		<Route path="/search" component={Search} />
      		<Route path="/profile" component={ProfileContainer} />
      		<Route path="/login" component={LoginContainer} />
      		<Route path="/logout" component={Logout} />
      		<Route path="/signup" component={SignupContainer} />
          <Route path="/postjob" component={PostJobContainer} />
      	</Switch>
      </div>
    );
  }
}

export default Body;
