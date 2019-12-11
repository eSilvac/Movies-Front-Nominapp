// Configurations
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'

// Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';

// Redux
import { connect } from 'react-redux';
import { getLists } from './../../redux/actions/listhandle';

class NavbarUserList extends Component {
  componentDidMount() {
    this.props.getLists(this.props.user._id);
  }

  render() {
    if (!Object.keys(this.props.list).length) {
      return (
        <NavDropdown.Item className="text-secondary" disabled>You dont have any list</NavDropdown.Item>
      );
    }

    return (
      <>
        {this.props.list.map((value, index) => {
          return (
            <LinkContainer to={`/list/${value._id}`} key={value._id}>
              <NavDropdown.Item>{value.name}</NavDropdown.Item>
            </LinkContainer>
          )
        })}
      </>
    );
  }
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
