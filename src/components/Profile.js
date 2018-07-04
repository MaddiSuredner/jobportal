import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Profile extends React.Component {
	constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

		if(!fields["usertype"]){
           formIsValid = false;
           errors["usertype"] = "User Type Cannot be empty";
        }
        //Name
        if(!fields["username"]){
           formIsValid = false;
           errors["username"] = "User Name Cannot be empty";
        }
        if(!fields["inputPassword"]){
           formIsValid = false;
           errors["inputPassword"] = "Password Cannot be empty";
        }
        if(!fields["confPass"]){
           formIsValid = false;
           errors["confPass"] = "Confirmed Password Cannot be empty";
        }
        if(fields["inputPassword"] && fields["confPass"]){
        	if(fields["inputPassword"]!== fields["confPass"] ){
				formIsValid = false;
           		errors["confPass"] = "Confirmed Password, didn't match";
        	}
        }
		if(!fields["phonenumber"]){
           formIsValid = false;
           errors["phonenumber"] = "Phone # Cannot be empty";
        } else if(typeof fields["phonenumber"] !== "undefined"){
           if(fields["phonenumber"].length != 10){
              formIsValid = false;
              errors["phonenumber"] = "Phone # must be 10 digits";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
        	let fields = this.state.fields;
        	this.props.signUpHandler(fields);
        	this.props.loginHandler(fields['email'], fields['inputPassword'], fields['usertype']);
        }
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
  render() {
  		if(!this.props.loggedIn) {
			return(<Redirect to="/" />);
		}
	    return (
	    	<div className="card" style={{width: "50%","margin-top":"100px","margin-left":"100px"}}>
			<div class="card-body">
			<form onSubmit= {this.contactSubmit.bind(this)}>
				  <div className="form-group row">
				    <label for="username" className="col-sm-2 col-form-label">Job Title : </label>
				    <div className="col-sm-5">
				      {this.props.jobinfo.jobtitle}
				    </div>  
				  </div>
				  <div className="form-group row">
				    <label for="username" className="col-sm-2 col-form-label">Job Description : </label>
				    <div className="col-sm-5">
				      {this.props.jobinfo.description}
				    </div>  
				  </div>
				  <div className="form-group row">
				    <label for="username" className="col-sm-2 col-form-label">User Name : </label>
				    <div className="col-sm-5">
				      {this.props.userinfo.username}
				    </div>  
				  </div>
				  <div className="form-group row">
				    <label for="education" className="col-sm-2 col-form-label">Education : </label>
				    <div className="col-sm-5">
				       <select class="form-control" name="education" id="education">
						  <option value="-1">Please select</option>
						  <option value="1">B.Tech</option>
						  <option value="2">MCA</option>
						  <option value="3">M.Tech</option>
						  <option value="4">Bsc</option>
						  <option value="5">MBA</option>
						</select>
				    </div>
				    <small id="education" class="form-text text-danger">{this.state.errors["education"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="skill" className="col-sm-2 col-form-label">Skills : </label>
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
				    <small id="skill" class="form-text text-danger">{this.state.errors["skill"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="exp" className="col-sm-2 col-form-label">Experience : </label>
				    <div className="col-sm-5">
				       <select class="form-control" name="exp" id="exp">
						  <option value="-1">Please select</option>
						  <option value="1+">1 to 2 years</option>
						  <option value="2+">2 to 3 years</option>
						  <option value="3+">3 to 4 years</option>
						  <option value="4+">4 to 5 years</option>
						  <option value="5+">5 to 6 years</option>
						</select>
				    </div>
				    <small id="exp" class="form-text text-danger">{this.state.errors["exp"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="company" className="col-sm-2 col-form-label">Company : </label>
				    <div className="col-sm-5">
				      <input type="text"
				      	 ref="company"
				      	 className="form-control" 
				      	 name="company"
				      	 id="company"
				      	 onChange={this.handleChange.bind(this, "company")} 
				     	 value={this.state.fields["company"]} />
				    </div>
				    <small id="company" class="form-text text-danger">{this.state.errors["company"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="resume" className="col-sm-2 col-form-label">Resume : </label>
				    <div className="col-sm-5">
				      <input type="file"
				      	 ref="resume"
				      	 className="form-control" 
				      	 name="resume"
				      	 id="resume"
				      	 onChange={this.handleChange.bind(this, "resume")} 
				     	 value={this.state.fields["resume"]} />
				    </div>
				    <small id="resume" class="form-text text-danger">{this.state.errors["resume"]}</small>
				  </div>
				 
				  <div className="form-group row"  style={{"margin-left":"7rem"}}>
					  <button type="submit" className="btn btn-danger">Apply</button>
					  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					  <button type="reset" className="btn btn-danger">Reset</button>
				  </div>
			</form>
			</div>
			</div>
	    );
  }
}

function mapStateToProps(state, ownProps){
	return {
		loggedIn : state.login.loggedIn,
		userinfo : state.login.userinfo,
		jobinfo : state.login.jobinfo
	};
}
const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
