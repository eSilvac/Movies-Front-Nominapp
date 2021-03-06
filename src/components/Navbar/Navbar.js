import React from 'react';
import { Link } from "react-router-dom";

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

// Components
import NavbarLinks from './NavbarLinks'

function PageNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">Nominapp</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarLinks />
      </Container>
    </Navbar> 
  );
}

export default PageNavbar;
