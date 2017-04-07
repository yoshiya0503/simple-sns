/**
 * @fileoverview App.jsx
 * @name App.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
