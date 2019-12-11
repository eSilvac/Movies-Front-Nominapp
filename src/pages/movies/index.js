import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Utilities
import List from './../../components/List/List';
import MoviesApi from './../../utils/moviesApi';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { connect } from 'react-redux';

function ShowList() {
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    MoviesApi.get(this.props.path + "?api_key=3d7fd0461ae8d0f2e808c37fb41950d7")
      .then( data => console.log(data))
      .catch( error => console.log(error))
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ShowList);
