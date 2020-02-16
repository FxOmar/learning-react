import React from "react";
// import Clock from "./Clock";
// import Jokes from "./Jokes";
import NavBar from "./navbar";
// import Hevent from "./Hevents";
// import LoginControl from "./LoginControl";
import Vswitcher from "./Vswitcher";

import "./styles.css";

// function MailBox(props) {
// 	const unReadMessages = props.messages;

// 	return (
// 		<div>
// 			<h1>Welcome to your mailBox</h1>
// 			{unReadMessages.length > 0 && (
// 				<h2>You have {unReadMessages.length} unread messages.</h2>
// 			)}
// 		</div>
// 	);
// }

export default function App() {
	const obj = [
		{
			video: (
				<iframe
					title="My Daily Marathon Tracker"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/hHW1oY26kxQ"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			)
		},
		{
			video: (
				<iframe
					title="My Daily Marathon Tracker"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/EAHzlJFPWLc"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			)
		}
	];
	return (
		<div className="App">
			<NavBar />
			{/* <Hevent />
			<LoginControl />
			<MailBox messages={messages} /> */}
			<Vswitcher data={obj} />
		</div>
	);
}
