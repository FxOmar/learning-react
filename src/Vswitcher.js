import React from "react";

export default class Vswitcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			server: "",
			isActive: true
		};

		this.handleTheSwitch = this.handleTheSwitch.bind(this);
	}

	componentDidMount() {
		this.setState((state, props) => ({
			data: (state.data = props.data)
		}));
	}

	handleTheSwitch(i) {
		const serverButtons = document.getElementsByClassName("server");
		for (let i = 0; i < serverButtons.length; i++) {
			serverButtons[i].classList.remove("active");
		}
		serverButtons[i].classList.add("active");

		const servers = this.state.data[i];
		this.setState({
			isActive: true,
			server: servers.video
		});
	}

	render() {
		const data = this.state.data;

		let defaultVideo;

		for (let i = 0; i < data.length; i++) {
			defaultVideo = data[0].video;
		}

		return (
			<div>
				{this.state.server === "" ? defaultVideo : this.state.server}
				<br />
				{data.map((d, i) => (
					<button
						className="server"
						key={i.toString()}
						onClick={() => this.handleTheSwitch(i)}
					>
						{i + 1}
					</button>
				))}
			</div>
		);
	}
}
