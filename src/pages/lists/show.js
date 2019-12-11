import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Utilities
import List from './../../components/List/List';
import Api from './../../utils/api';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { connect } from 'react-redux';

function ShowList({ user, match }) {
  const listId = match.params.listId;
  const [list, setlist] = useState({});

  useEffect(() => {
    Api.get('list/' + listId)
    .then( data => setlist(data.data))
    .catch( error => console.log(error))
  }, [listId]);

  if (!Object.keys(user).length) return <Redirect to='/'/>;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <List list={list} />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ShowList);
