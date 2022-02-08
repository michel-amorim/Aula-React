import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Titulo 1",
        body: "o corpo 1",
      },
      {
        id: 2,
        title: "Titulo 2",
        body: "o corpo 2",
      },
      {
        id: 3,
        title: "Titulo 3",
        body: "o corpo 3",
      },
    ],
  };

  handlePClick = () => {
    this.setState({ name: "Junior" });
  };

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
