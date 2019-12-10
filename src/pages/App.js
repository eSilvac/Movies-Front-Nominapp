import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Navbar from '../components/Navbar/Navbar';
import Register from './users/register';
import Login from './users/login';

// Redux
import { connect } from 'react-redux';
import { verifyToken } from './../redux/actions/userhandle';

function App({ verifyToken }) {
  useEffect(() => {
    const token = localStorage.getItem("authenticationToken");
    if (token) verifyToken(token);
  });

  return (	
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>	
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    verifyToken: token => dispatch(verifyToken(token))
  };
};

export default connect(null, mapDispatchToProps)(App);
