import React from "react";
import axios from "axios";

export default class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   this.fetchJokes();
  // }

  fetchJokes() {
    this.setState({ isLoading: true });

    axios
      .get("https://icanhazdadjoke.com/slack")
      .then(({ data }) => {
        this.setState({
          data: data.attachments,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) return <p>Loading....</p>;

    return (
      <div>
        {data.map((joke, i) => (
          <p key={i}>{joke.fallback}</p>
        ))}
        <button onClick={this.fetchJokes.bind(this)}>fetch Jokes</button>
      </div>
    );
  }
}
