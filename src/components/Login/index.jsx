/**
 * @fileoverview Login
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Radium from 'radium';
import Footer from '../Layout/Footer';


const styles = {
  height: 300,
  widht: 200,
  margin: 60,
  textAlign: 'center',
};

const h1 = {
  margin: 10,
};

const mail = {
  margin: 20,
};

const password = {
  margin: 10,
};


class Login extends Component {

  render() {
    return (
      <div>
        <Paper style={styles} zDepth={3} >
          <h1 style={h1} > Login </h1>
          <Divider />
          <TextField style={mail} hintText="Mail Address" />
          <br />
          <TextField style={password} hintText="Password" />
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default Radium(Login);
