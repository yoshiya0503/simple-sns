/**
 * @fileoverview Header
 * @name Header.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import HeaderMenu from './HeaderMenu';

class Header extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Simple SNS"
          iconElementLeft={<HeaderMenu />}
        />
      </div>
    );
  }
}

export default Header;
