import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends Component {
  render() {
    const { onLogin, onLogout, accessToken } = this.props;
    let page;
    if (accessToken) {
      page = <Nav.Link onClick={onLogout}> Logout </Nav.Link>;
    } else {
      page = <Nav.Link onClick={onLogin}> Login </Nav.Link>;
    }
    return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Github Searcher</Navbar.Brand>
          <Nav className="me-auto">{page}</Nav>
          <Nav>Built By Timi</Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
