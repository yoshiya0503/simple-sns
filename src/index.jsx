/**
 * @fileoverview App.jsx
 * @name App.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducer from './reducers';
import Routes from './routes';

const store = createStore(reducer);

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
