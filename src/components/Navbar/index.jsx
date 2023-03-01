import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow"
      >
        <Container>
          <Navbar.Brand href="#home">My Portofolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
            <Nav className="mx-auto"></Nav>
            <Nav className="mx-auto"></Nav>
            <Nav className="mx-auto"></Nav>
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
