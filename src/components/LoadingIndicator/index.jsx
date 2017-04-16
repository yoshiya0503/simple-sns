/**
 * @fileoverview LoadingIndicator
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Radium from 'radium';

const styles = {
  height: 400,
  width: 300,
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
};


class LoadingIndicator extends Component {
  render() {
    return (
      <div style={styles}>
        <CircularProgress size={80} thickness={5} />;
      </div>
    );
  }
}

export default Radium(LoadingIndicator);
