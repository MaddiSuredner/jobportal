import React from 'react';
import {connect} from 'react-redux';

class Search extends React.Component {
  render() {
    return (
        <div className="card" style={{width: "50%","margin-top":"100px","margin-left":"100px"}}>
		<div class="card-body">
        <form>
  			<div className="form-group row">
			    <label for="company" className="col-sm-2 col-form-label">Company :</label>
			    <div className="col-sm-5">
			      <select class="form-control" name="company" id="company">
					  <option value="-1">Please select</option>
					  <option value="1">Cognizant</option>
					  <option value="2">Infosys</option>
					  <option value="3">TCS</option>
					  <option value="4">Verizon</option>
					</select>
			    </div>
			</div>
			<div className="form-group row">
			    <label for="skill" className="col-sm-2 col-form-label">Skills :</label>
			    <div className="col-sm-5">
			      <select class="form-control" name="skill" id="skill">
					  <option value="-1">Please select</option>
					  <option value="1">Java</option>
					  <option value="2">C++</option>
					  <option value="3">Mainframes</option>
					  <option value="4">AngularJS</option>
					  <option value="5">ReactJS</option>
					</select>
			    </div>
			</div>
			<div className="form-group row">
			    <label for="exp" className="col-sm-2 col-form-label">Experience :</label>
			    <div className="col-sm-5">
			      <select class="form-control" name="exp" id="exp">
					  <option value="-1">Please select</option>
					  <option value="1">1+</option>
					  <option value="2">2+</option>
					  <option value="3">3+</option>
					  <option value="4">4+</option>
					  <option value="5">5+</option>
					</select>
			    </div>
			</div>
			<div className="form-group row"  style={{"margin-left":"7rem"}}>
			  <button type="submit" className="btn btn-danger">Search</button>			  	
		    </div>
		</form>
        </div>
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
