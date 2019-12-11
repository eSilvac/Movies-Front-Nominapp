// Configurations
import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap'

// Components
import NavbarUserLists from './NavbarUserList';

// Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';

// Redux
import { connect } from 'react-redux';
import { getLists } from './../../redux/actions/listhandle';

function NavbarUserList({ user, getLists }) {
  useEffect(() => {
    getLists(user._id);
  }, [getLists, user]);

  return(
    <NavDropdown title="Movies List" className="text-white">
      <LinkContainer to="/list/create">
        <NavDropdown.Item>Create New List</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <NavbarUserLists />
    </NavDropdown>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  list: state.list
});

const mapDispatchToProps = dispatch => {
  return {
    getLists: (userId) => dispatch(getLists(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUserList);
