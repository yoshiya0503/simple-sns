/**
 * @fileoverview Footer
 * @name Footer.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  '.layout-footer': {
    position: 'fixed',
    bottom: 50,
    width: '100%',
    height: '50px',
    textAlign: 'center',
  },
};


class Footer extends Component {

  render() {
    return (
      <footer style={[styles['.layout-footer']]}>
        <p>(c) funnyface. inc</p>
        <a href="mailto:funnyface@co.jp">funnyface@co.jp</a>
      </footer>
    );
  }
}

export default Radium(Footer);
