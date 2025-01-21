import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar bg="warning" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-dark">
          E-Learning
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4">
            <LinkContainer to="/dashboard/home">
              <Nav.Link className="text-dark fw-bold">Home</Nav.Link>
            </LinkContainer>
            <NavDropdown
              title={<span className="text-dark fw-bold">Courses</span>}
              id="coursesDropdown"
            >
              <LinkContainer to="/dashboard/courses/web-development">
                <NavDropdown.Item>Web Development</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/dashboard/courses/data-science">
                <NavDropdown.Item>Data Science</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/dashboard/courses/machine-learning">
                <NavDropdown.Item>Machine Learning</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/dashboard/courses/graphic-design">
                <NavDropdown.Item>Graphic Design</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/dashboard/about">
              <Nav.Link className="text-dark fw-bold">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard/contact">
              <Nav.Link className="text-dark fw-bold">Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link className="text-dark fw-bold">Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
