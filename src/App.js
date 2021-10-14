import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Github from "./Github";
import Header from "./components/header";
import Auth0Lock from "auth0-lock";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: "",
      profile: {},
    };
  }

  static defaultProps = {
    clientID: "vPJ6I66BLV10BOgT4slamZ8zAQBliio7",
    domain: "dev-iubnt0-z.us.auth0.com",
  };

  // auth() {
  //   return {
  //     auth: {
  //       redirectUrl: "http://localhost:3000",
  //       responseType: "token id_token",
  //       params: {
  //         scope: "open profile email",
  //       },
  //     },
  //   };
  // }
  componentWillMount() {
    // LOG IN
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on("authenticated", (authResult) => {
      console.log(authResult);
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error.original.message);
          return;
        }
        //console.log(profile);
        this.setProfile(authResult.accessToken, profile);
      });
    });
    // ALREADY LOGGED IN
    this.getProfile();
  }

  setProfile = (accessToken, profile) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("profile", JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem("accessToken"),
      profile: JSON.parse(localStorage.getItem("profile")),
    });
  };

  getProfile = () => {
    if (localStorage.getItem("accessToken") !== null) {
      this.setState(
        {
          accessToken: localStorage.getItem("accessToken"),
          profile: JSON.parse(localStorage.getItem("profile")),
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };
  showLock = () => {
    this.lock.show();
  };
  logout = () => {
    this.setState(
      {
        accessToken: "",
        profile: "",
      },
      () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("profile");
      }
    );
  };
  render() {
    let gitty;
    if (this.state.accessToken) {
      gitty = <Github />;
    } else {
      gitty = <h3 className = "github">Click on Login to view Github Viewer.</h3>;
    }
    return (
      <div className="App">
        <Header
          onLogin={this.showLock}
          onLogout={this.logout}
          accessToken={this.state.accessToken}
          lock={this.lock}
        />
        {gitty}
      </div>
    );
  }
}

export default App;
