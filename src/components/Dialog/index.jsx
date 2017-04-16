/**
 * @fileoverview Dialog
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import MaterialDialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Radium from 'radium';

class Dialog extends Component {

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.props.closeDialog}
      />,
    ];
    return (
      <MaterialDialog
        actions={actions}
        open={this.props.isDialog}
        onRequestClose={this.props.closeDialog}
      >
        {this.props.message}
      </MaterialDialog>
    );
  }
}

export default Radium(Dialog);
