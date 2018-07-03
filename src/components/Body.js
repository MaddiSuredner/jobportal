import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "./Home";
import Search from "./Search";
import LoginContainer from "../containers/LoginContainer";
import Logout from "./Logout";

class Body extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{"margin-top":"60px"}}>
      	<Switch>
      		<Route path="/" exact componet={Home} />
      		<Route path="/search" componet={Search} />
      		<Route path="/login" componet={LoginContainer} />
      		<Route path="/logout" componet={Logout} />
      	</Switch>
      </div>
    );
  }
}

export default Body;
