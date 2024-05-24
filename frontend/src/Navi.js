import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'; // Import search icon
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

const Navi = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'rgba(44, 39, 54, 0.9)' }} variant="dark" data-bs-theme="dark"> {/* Use slightly transparent dark purple color */}
      <Container fluid>
        {/* Replace Navbar.Brand with logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-transparent-png.png`} // Path to your logo image
            alt="Pioneers Custom PC"
            height="40" // Increase logo size
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarColor01" />
        <Navbar.Collapse id="navbarColor01">
          <Nav className="me-auto">
            <NavDropdown title="Custom PC" id="navbarScrollingDropdown">
              <Link to="/core" className="dropdown-item">Core</Link>
              <Link to="/creater" className="dropdown-item">Creater</Link>
            </NavDropdown>
            <Link to="/product" className="nav-link">Accessory</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
          </Nav>
          <Nav>
            <Link to="/signin" className="nav-link">Sign In</Link>
            <Link to="/register" className="nav-link">Sign Up</Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-sm-2" aria-label="Search" />
            <Button variant="secondary" type="submit"><FiSearch /></Button> {/* Add search icon */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
