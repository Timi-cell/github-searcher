import React, { Component } from "react";

class Search extends Component {
  state = {
    username: "",
  };
  submitForm = (event) => {
    event.preventDefault();
    const { searchProfile } = this.props;
    searchProfile(this.state.username);
    this.setState({ username: "" });
  };

  handleSearch = (value) => {
    let username = value;
    this.setState({ username });
  };
  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.submitForm}>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              onChange={(event) => this.handleSearch(event.target.value)}
              value={this.state.username}
              placeholder="Type username here..."
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
