import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogging: false
		};
		this.LoginHandler = this.LoginHandler.bind(this);
		this.LogoutHandler = this.LogoutHandler.bind(this);
	}

	LoginHandler() {
		this.setState({
			isLogging: true
		});
	}

	LogoutHandler() {
		this.setState({
			isLogging: false
		});
	}

	render() {
		const isLogging = this.state.isLogging;
		let button;
		if (isLogging) button = <LogoutButton onClick={this.LogoutHandler} />;
		else button = <LoginButton onClick={this.LoginHandler} />;

		return <div>{button}</div>;
	}
}
