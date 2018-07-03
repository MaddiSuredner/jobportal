import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Signup extends React.Component {
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
	render(){
		if(this.props.loggedIn) {
			return(<Redirect to="/" />);
		}
		return (
			<div className="card" style={{width: "50%","margin-top":"100px","margin-left":"100px"}}>
			<div class="card-body">
			<form onSubmit= {this.contactSubmit.bind(this)}>
				<div className="form-group row" style={{"margin-left":"7rem"}}>
				  <div class="form-check form-check-inline">
					  <input class="form-check-input" 
					  	type="radio" name="usertype"  ref="usertype"
					  	id="inlineRadio1" 
					  	value="user"
					  	onChange={this.handleChange.bind(this, "usertype")} 
				     	/>
					  <label class="form-check-label" for="inlineRadio1">Job Seeker</label>
					</div>
					<div class="form-check form-check-inline">
					  <input class="form-check-input" ref="usertype"
					  	type="radio" name="usertype" 
					  	id="inlineRadio2" 
					  	value="emp"
					  	onChange={this.handleChange.bind(this, "usertype")} 
				     	/>
					  <label class="form-check-label" for="inlineRadio2">Employer</label>
					</div>
					<small class="form-check-input" class="form-text text-danger">{this.state.errors["usertype"]}</small>
				</div>
				<div className="form-group row">
				    <label for="username" className="col-sm-2 col-form-label">User Name</label>
				    <div className="col-sm-5">
				      <input type="text"
				      	 ref="username"
				      	 className="form-control" 
				      	 name="username"
				      	 id="username"
				      	 onChange={this.handleChange.bind(this, "username")} 
				      	 value={this.state.fields["username"]}/>
				    </div>
				    <small id="username" class="form-text text-danger">{this.state.errors["username"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
				    <div className="col-sm-5">
				      <input type="password" 
				      	ref="inputPassword"
				      	className="form-control"
				      	name="inputPassword"
				      	id="inputPassword" 
				     	placeholder="Password"
				     	onChange={this.handleChange.bind(this, "inputPassword")} 
				     	value={this.state.fields["inputPassword"]} />
				    </div>
				    <small id="inputPassword" class="form-text text-danger">{this.state.errors["inputPassword"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="confPass" className="col-sm-2 col-form-label">Confirmed Password</label>
				    <div className="col-sm-5">
				      <input type="password"
				      	ref="confPass"
				      	className="form-control"
				      	name="confPass"
				      	id="confPass" 
				     	placeholder="Password"
				     	onChange={this.handleChange.bind(this, "confPass")} 
				     	value={this.state.fields["confPass"]} />
				    </div>
				    <small id="confPass" class="form-text text-danger">{this.state.errors["confPass"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="phonenumber" className="col-sm-2 col-form-label">Phone #</label>
				    <div className="col-sm-5">
				      <input type="number"
				      	 ref="phonenumber"
				      	 className="form-control" 
				      	 name="phonenumber"
				      	 id="phonenumber"
				      	 onChange={this.handleChange.bind(this, "phonenumber")} 
				     	 value={this.state.fields["phonenumber"]} />
				    </div>
				    <small id="phonenumber" class="form-text text-danger">{this.state.errors["phonenumber"]}</small>
				  </div>
				  <div className="form-group row">
				    <label for="email" className="col-sm-2 col-form-label">Email</label>
				    <div className="col-sm-5">
				      <input type="text"
				      	 ref="email"
				      	 className="form-control" 
				      	 name="email"
				      	 id="email"
				      	 onChange={this.handleChange.bind(this, "email")} 
				     	 value={this.state.fields["email"]} />
				    </div>
				    <small id="email" class="form-text text-danger">{this.state.errors["email"]}</small>
				  </div>
				 
				  <div className="form-group row"  style={{"margin-left":"7rem"}}>
					  <button type="submit" className="btn btn-primary">Submit</button>
					  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					  <button type="reset" className="btn btn-primary">Reset</button>
				  </div>
			</form>
			</div>
			</div>
		);
	}
}

export default Signup;