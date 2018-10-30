import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList";
import Post from "./Post";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPostId: null
    };
  }

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    fetch(URL)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="App">
        <main>{this._renderPosts()}</main>
      </div>
    );
  }

  _renderPosts = () => {
    if (this.state.selectedPostId) {
      const [post] = this.state.posts.filter(
        ({ id }) => id === this.state.selectedPostId
      );

      return <Post post={post} onSelected={this._handlePostSelected} />;
    } else {
      return (
        <PostList
          posts={this.state.posts}
          onSelected={this._handlePostSelected}
        />
      );
    }
  };

  _handlePostSelected = id => {
    this.setState({ selectedPostId: id });
  };
}

export default App;
