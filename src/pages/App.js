import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Navbar from '../components/Navbar/Navbar';
import Register from './users/register';
import Login from './users/login';

function App() {
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

export default App;
