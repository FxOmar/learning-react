import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div>Logo</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
