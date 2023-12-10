import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const linkStyle = {
  color: 'white', // Set text color to white
  textDecoration: 'none', // Remove underline
  fontSize:'27px'
};

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand style={linkStyle}>Rajvir Singhaniya</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/course/all" style={linkStyle}>Courses</Link>&nbsp;&nbsp;
            <Link href="/course/add" style={linkStyle}>Add</Link>
          </Nav>
          <Nav>
            <Link href="#login" style={linkStyle}>Login</Link>
            <Link href="#signup" style={linkStyle}>Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
