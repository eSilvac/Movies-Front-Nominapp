// Configurations
import React from 'react';
import { Link } from "react-router-dom";

// Components
import NavbarDropdownLists from './NavbarDropdownList';

// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from './../../redux/actions/userhandle';

function NavbarLinks({ user, logoutUser }) {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      {!Object.keys(user).length ? (
        <Nav className="ml-auto">
          <Link className="nav-link mr-2" to="/login">Login</Link>
          <Link className="nav-link" to="/register">Register</Link>
        </Nav>
      ) : (
        <>
        <Navbar.Text className="ml-3 small">{user.email}</Navbar.Text>
        <Nav className="ml-auto">
          <NavbarDropdownLists />
          <Nav.Link className="nav-link text-white" onClick={logoutUser}>Log Out</Nav.Link>
        </Nav>
        </>
      )}
    </Navbar.Collapse>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLinks);
