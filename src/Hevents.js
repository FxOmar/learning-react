import React from "react";

export default class Event extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isTaggle: true
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isTaggle: !state.isTaggle
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isTaggle ? "ON" : "OFF"}
			</button>
		);
	}
}
