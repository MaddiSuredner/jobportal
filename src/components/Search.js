import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Search extends React.Component {
	constructor(props){
       super(props);

       this.state = {
           jobs: [],
           fields:{}
       }      
    }
	searchJobs(e){
        e.preventDefault();

       axios.get("http://localhost:3000/jobs")
		.then((response) => {
			if(response.data && response.data.length > 0){
				console.log(response.data);
				this.setState({jobs: response.data});
			} 			
		})
		.catch((error)=> {
			console.log(error.message);
		});
    }
  render() {
    return (
        <div className="card" style={{width: "50%","margin-top":"100px","margin-left":"100px"}}>
		<div class="card-body">
        <form onSubmit= {this.searchJobs.bind(this)}>
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
        {(this.state.jobs.length > 0)?
        	<div class="container">
			  <h2>Job Positions opened</h2>
			  <table class="table table-bordered">
			    <thead class="thead-dark">
			      <tr>
			      	<th>Job Title</th>
			        <th>Description</th>
			        <th>Skills</th>
			        <th>Experience</th>
			        <th>Education</th>
			        <th>Location</th>			       
			      </tr>
			    </thead>
			    <tbody>
			    	{this.state.jobs.map((job, idx) => (
			            <tr key={job.jobid}>
			            <td>{job.jobtitle}</td>
			            <td>{job.description}</td>
			            <td>{job.skills}</td>
			            <td>{job.experience}</td>
			            <td>{job.education}</td>
			            <td>{job.state}</td>
			            </tr>			            
			          ))}
								      				     
			    </tbody>
			  </table>
			  <small class="form-text text-grayed">Please login to apply the job positions</small>
			</div>
		 :null}
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
