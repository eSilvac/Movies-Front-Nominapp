// Configurations
import React from 'react';
import { useHistory } from "react-router-dom";

// Components
//import NavbarUserLists from './NavbarUserList';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Redux
import { connect } from 'react-redux';
import { deleteList } from './../../redux/actions/listhandle';

function List({ user, list, deleteList }) {
  let history = useHistory();
  
  function redirectToHome() {
    history.push("/");
  }

  return (
    <div className="my-4">
      <div className="d-flex justify-content-between p-3 border-bottom">
        <h3 className="text-secondary">{list.name}</h3>
        <div>
          <Button variant="danger" onClick={() => deleteList(list._id, redirectToHome)}>Delete</Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    deleteList: (listId, callback) => dispatch(deleteList(listId, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
