/**
 * @fileoverview App.jsx
 * @name App.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FeedItems } from './components/Feed';

class App extends Component {

  constructor() {
    super();
    this.feeds = [
      {
        id: 1,
        title: 'this is the one',
        body: 'this is the one of the feeds id = 1, have a nice day',
        user: {
          name: 'yoshiya ito',
        },
      },
      {
        id: 2,
        title: 'this is the two',
        body: 'this is the one of the feeds id = 2, have a nice day',
        user: {
          name: 'yoshiya ito',
        },
      },
    ];
  }

  render() {
    return (
      <MuiThemeProvider>
        <FeedItems feeds={this.feeds} />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
