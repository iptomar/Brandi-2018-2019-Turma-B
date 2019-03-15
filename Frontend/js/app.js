// Referências (para intellisense)
/// <reference path="../typings/react.d.ts" />
/// <reference path="../typings/react-dom.d.ts" />


class Authentication extends React.Component{
	constructor(props){
		// a invocação do construtor "super" implica passar a props 
		super(props);
		
		this.state ={}
	}
	//Retorna a interface a ser mostrada ao utilizador 
	render(){
		
		return React.createElement(
			"div",
			null,
			React.createElement("h1",null,"Login"),
			React.createElement("lable", null, "Username", React.createElement("input",null,null)),
			React.createElement("lable", null, "Password", React.createElement("input",null,null)),
			React.createElement("button", {type: "button",onClick:(evt) =>this.handleLoginButtonClick(evt)}, "Login"),
			React.createElement("button", {type: "button",onClick:(evt) =>this.handleSignUpButtonClick(evt)},"Sign Up")
		); 
	}
	
	
	
	
	handleSignUpButtonClick(evt){
		
	}

}

ReactDOM.render(
	React.createElement(Authentication, null),
	document.getElementById("app")	
);