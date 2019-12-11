// Configurations
import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Redux
import { connect } from 'react-redux';
import { addMovieToList } from './../../redux/actions/listhandle';

function MovieDropdownList({ list, movie, addMovieToList }) {
  if (!Object.keys(list).length) {
    return (<Button variant="info" className="mt-2" disabled>Please Create a new list</Button>);
  }

  return (
    <DropdownButton id="movie-dropdown" variant="success" title="Add to a list" className="addMovie mt-2">
      {list.map((value, index) => {
        return (<Dropdown.Item key={index} onClick={() => addMovieToList(value._id, movie.id)}>{value.name}</Dropdown.Item>)
      })}
    </DropdownButton>
  );
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => {
  return {
    addMovieToList: (listId, movieId) => dispatch(addMovieToList(listId, movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDropdownList);
