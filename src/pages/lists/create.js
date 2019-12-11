import React from 'react';
import { Redirect } from 'react-router-dom';

// Utilities
import ListForm from './../../components/List/ListForm';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Redux
import { connect } from 'react-redux';

function ListCreate({ user }) {
  if (!Object.keys(user).length) return <Redirect to='/'/>;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Card className="mt-5">
            <Card.Header>
              <h5 className="m-0">Create New Movie List</h5>
            </Card.Header>
            <Card.Body>
              <ListForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ListCreate);
