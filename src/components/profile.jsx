import React, { Component } from "react";

class Profile extends Component {
  render() {
    const {
      homeURL,
      notFound,
      avatar,
      repos,
      followers,
      following,
      name,
      username,
      bio,
    } = this.props.userData;
    if (notFound === "Not Found") {
      return (
        <div>
          <h2>User does not seem to exist.</h2>
        </div>
      );
    } else {
      return (
        <section className="profile-block">
          <div>
            <img
              className="github-image"
              src={avatar}
              alt="github profile picture"
            />
            <div>
              <a href={homeURL} target="_blank" rel="noreferrer">
                Go to User's Github Home Page.
              </a>
            </div>
            <h2 id="name">{name}</h2>
            <h5 id="username">{username}</h5>
            <h6 id="bio">{bio}</h6>
          </div>
          <div className="footer">
            <div>
              <p>{repos}</p> <p>Repositories</p>
            </div>
            <div>
              <p>{followers}</p> <p>Followers</p>
            </div>
            <div>
              <p>{following}</p> <p>Following</p>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Profile;
