/**
 * @fileoverview App.jsx
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import { store } from './store';
import Routes from './routes';

const token = localStorage.getItem('token');
axios.defaults.headers.common['TOKEN'] = token;

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
