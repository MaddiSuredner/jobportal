import React from 'react';
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class Login extends React.Component {
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
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Email Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       if(!fields["inputPassword"]){
           formIsValid = false;
           errors["inputPassword"] = "Password Cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
        	let fields = this.state.fields;
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
			{(this.props.error)?<h4 style={{color:"red"}}>{this.props.error}</h4>:null}
			{(this.props.fetching)?<h4 style={{color:"blue"}}>{this.props.fetching}</h4>:null}
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
				    <label for="email" className="col-sm-2 col-form-label">Email</label>
				    <div className="col-sm-5">
				      <input type="text"
				      	 ref="email"
				      	 className="form-control" 
				      	 name="email"
				      	 id="email"
				      	 placeholder="Email"
				      	 onChange={this.handleChange.bind(this, "email")} 
				     	 value={this.state.fields["email"]} />
				    </div>
				    <small id="email" class="form-text text-danger">{this.state.errors["email"]}</small>
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
				  <div className="form-group row"  style={{"margin-left":"7rem"}}>
					  <button type="submit" className="btn btn-primary">Submit</button>
					  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					  <button type="reset" className="btn btn-primary">Reset</button>
				  </div>
				  <div className="form-group row"  style={{"margin-left":"7rem"}}>
				  	<small id="emailHelp" class="form-text text-muted">
				  	If your not register with us. Please <NavLink to="/signup">register</NavLink> now</small>
				  </div>
			</form>
			</div>
			</div>
		);
	}
}
export default Login;