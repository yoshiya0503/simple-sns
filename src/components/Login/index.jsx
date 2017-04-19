/**
 * @fileoverview Login
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Radium from 'radium';
import Footer from '../Layout/Footer';


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

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  login() {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <Paper style={styles} zDepth={3} >
          <h1 style={h1} > Login </h1>
          <Divider />
          <TextField
            style={mail}
            hintText="Mail Address"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br />
          <TextField
            style={password}
            hintText="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <FlatButton label="ログイン" onClick={this.login} />
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default Radium(Login);
