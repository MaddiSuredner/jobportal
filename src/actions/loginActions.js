import axios from 'axios';

export function loginAction(username, password, type){
	return function(dispatch, store){
		dispatch({type:"LOGIN_IN_PROGRESS"});

		axios.get('http://localhost:3000/user?email='+username+'&inputPassword='+password+'&usertype='+type)
		.then((response) => {
			if(response.data && response.data.length > 0){
				dispatch({type:"LOGIN_SUCCESS", data:response.data[0]});
			} else {
				dispatch({type:"LOGIN_ERROR", error:"Authentication Failed !!", data:null});
			}
			
		})
		.catch((error)=> {
			dispatch({type:"LOGIN_ERROR", error:error.message});
		});
	};
}

export function signUpAction(formData){
	return function(dispatch, store){
		
		axios.post('http://localhost:3000/user',formData,
			{
				headers:{
					"Content-Type":"application/json"
				}
		})
		.then((response) => {
			//dispatch({type:"LOGIN_SUCCESS"});
		})
		.catch((error)=> {
			//dispatch({type:"LOGIN_ERROR", error:error.message});
		});
	};
}

export function logoutAction() {
	return {type:"LOGOUT"};
}