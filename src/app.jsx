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
    this.t = 100;
    console.log(process.env);
  }
  render() {
    return (
      <div>
        <p>env: { process.env.HOST } </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
