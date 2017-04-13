/**
 * @fileoverview ApplicationRouting
 * @name routes.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Login from './containers/Login';
import Profile from './containers/Profile';
import Feed from './containers/Feed';


class Routes extends Component {

  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} >
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={Feed} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}
export default Routes;
