import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Verizon Job Portal</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
	return {
		loggedIn : state.login.loggedIn
	};
}
const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;
