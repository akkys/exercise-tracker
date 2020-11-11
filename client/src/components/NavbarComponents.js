import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavbarComponents extends Component {
  render() {
    return (
      <div>
        <Navbar bg="info" expand="lg">
          <Navbar.Brand>Exercise Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Exercises
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                Create Exercise Log
              </Nav.Link>
              <Nav.Link as={Link} to="/user">
                Create User
              </Nav.Link>
              <Nav.Link as={Link} to="/userlist">
                Users List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponents;
