import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {jobAction} from "../actions/loginActions";

import axios from 'axios';

class AppliedJobs extends React.Component {
	constructor(props){
       super(props);

       this.state = {
           jobs: [],
           fields:{}
       }
       this.loadJobs();
    }
    loadJobs(){
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
    applyJob(job) {
	 	this.props.jobHandler(job, this.props.userinfo);
	 	return (<Redirect to="/profile" />);
	}
    render() {
  		if(!this.props.loggedIn) {
			return(<Redirect to="/" />);
		}
		return (
	      	<div className="container-fluid ">
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
				        <th></th>
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
				            <td><button type="submit" className="btn btn-danger"
				            	 onClick={this.applyJob.bind(this,job)}>Apply</button></td>
				            </tr>
				          ))}
        							      				     
				    </tbody>
				  </table>
				</div>
	      	</div>
	    );
  	};
}

function mapStateToProps(state, ownProps){
	return {
		loggedIn : state.login.loggedIn,
		userinfo : state.login.userinfo
	};
}
function mapDispatchToProps(dispatch, ownProps){
	return {
		jobHandler : (job, userinfo) => {
			dispatch(jobAction(job, userinfo));			
		}
	}
}
const JobsContainer = connect(mapStateToProps,mapDispatchToProps)(AppliedJobs);

export default JobsContainer;
