const defaultState = {
	fetching:false,
	loggedIn:false,
	userinfo:{},
	error:""
};

function loginReducer(prevState = defaultState, action){
	let newState;
	switch(action.type){
		case "LOGIN_IN_PROGRESS":
			newState = {
				...prevState, fetching:true, loggedIn:false, error:"",userinfo:{},
			};
			break;
		case "LOGIN_SUCCESS":
			newState = {
				...prevState, fetching:false, loggedIn:true, error:"",userinfo:action.data
			};
			break;
		case "LOGIN_ERROR":
			newState = {
				...prevState, fetching:false, loggedIn:false, error:action.error,userinfo:{},
			};
			break;
		case "LOGOUT":
			newState = {
				...prevState, fetching:false, loggedIn:false, error:"",userinfo:{},
			};
			break;
		default:
			newState = {...prevState};
	}
	return newState;
}
export default loginReducer;