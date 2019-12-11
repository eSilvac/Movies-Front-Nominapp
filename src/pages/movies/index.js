import React, { useState, useEffect } from 'react';

// Utilities
import Movies from './../../components/Movies/Movies';
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
    MoviesApi.get("/popular?api_key=3d7fd0461ae8d0f2e808c37fb41950d7")
      .then( data => {
        setmovieList(data.data.results)
      })
      .catch( error => console.log(error))
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Movies movies={movieList} />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ShowList);
