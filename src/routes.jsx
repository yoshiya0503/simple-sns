/**
 * @fileoverview ApplicationRouting
 * @name routes.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Profile from './components/Profile';
import { Header } from './components/Header';
import { FeedItems } from './components/Feed';

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

class FeedItemsWrapper extends Component {
  constructor() {
    super();
    this.feeds = [
      {
        id: 1,
        title: 'this is the one',
        body: 'this is the one of the feeds id = 1, have a nice day',
        user: {
          name: 'yoshiya ito',
          image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_400x400.jpg',
        },
      },
      {
        id: 2,
        title: 'this is the two',
        body: 'this is the one of the feeds id = 2, have a nice day',
        user: {
          name: 'yoshiya ito',
          image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_400x400.jpg',
        },
      },
    ];
  }
  render() {
    return <FeedItems feeds={this.feeds} />;
  }
}

class Routes extends Component {

  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Header} >
          <Route path="/profile" component={ProfileWrapper} />
          <Route path="/feed" component={FeedItemsWrapper} />
        </Route>
      </Router>
    );
  }
}
export default Routes;
