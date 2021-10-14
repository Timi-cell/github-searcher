import React, { Component } from "react";
import Search from "./components/search";
import Profile from "./components/profile";
const API = "https://api.github.com/users";

class Github extends Component {
  state = {
    username: "Timi-cell",
    name: "",
    avatar: "",
    homeURL: "",
    repos: "",
    followers: "",
    following: "",
    notFound: "",
    bio: "",
  };
  getProfile = (username) => {
    let finalURL = `${API}/${username}`;
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        const {
          login,
          name,
          avatar_url,
          html_url,
          public_repos,
          followers,
          following,
          message,
          bio,
        } = data;
        this.setState({
          username: login,
          name,
          avatar: avatar_url,
          homeURL: html_url,
          repos: public_repos,
          followers,
          following,
          notFound: message,
          bio,
        });
        console.log(this.state);
      })
      .catch((error) =>
        console.log("there was a problem in fetching data", error)
      );
  };
  componentDidMount() {
    this.getProfile(this.state.username);
  }
  render() {
    return (
      <div className="github">
        <Search searchProfile={this.getProfile} />
        <Profile userData={this.state} />
      </div>
    );
  }
}

export default Github;
