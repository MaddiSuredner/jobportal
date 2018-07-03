import React from 'react';
import {connect} from 'react-redux';

class Search extends React.Component {
  render() {
    return (
      <div >
        <h1>Welcome to Search Page</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
	return {
		loggedIn : state.login.loggedIn
	};
}
const SearchContainer = connect(mapStateToProps)(Search);
export default SearchContainer;
