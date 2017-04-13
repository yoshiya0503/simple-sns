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

class ProfileWrapper extends Component {
  constructor() {
    super();
    this.user = {
      id: 1,
      name: 'yoshiya ito',
      profile: '六畳一間の世界征服',
      image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_400x400.jpg',
    };
  }

  render() {
    return <Profile user={this.user} />;
  }
}

class Routes extends Component {

  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} >
          <Route path="/profile" component={ProfileWrapper} />
          <Route path="/feed" component={Feed} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}
export default Routes;
