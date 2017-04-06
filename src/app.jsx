/**
 * @fileoverview App.jsx
 * @name App.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.a = 10;
  }
  render() {
    return (
      <div>test</div>
    );
  }
}

render(<App />, document.getElementById('root'));
