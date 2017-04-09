/**
 * @fileoverview NotFound
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import Radium from 'radium';
import Footer from '../Layout/Footer';

const styles = {
  height: 500,
  width: 500,
  'text-align': 'center',
  'font-size': '20px',
};

class NotFound extends Component {

  render() {
    return (
      <div style={[styles]}>
        <p>お探しのページは見つかりません</p>
        <Footer />
      </div>
    );
  }
}

export default Radium(NotFound);
