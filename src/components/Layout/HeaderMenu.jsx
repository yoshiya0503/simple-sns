/**
 * @fileoverview HeaderMenu
 * @name HeaderMenu.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class HeaderMenu extends Component {

  render() {
    return (
      <IconMenu
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
      >
        <MenuItem
          primaryText="プロフィール"
          containerElement={<Link to="/profile" />}
        />
        <MenuItem
          primaryText="フィード"
          containerElement={<Link to="/feed" />}
        />
      </IconMenu>
    );
  }
}

export default HeaderMenu;
