/**
 * @fileoverview LoginContainer
 * @name Login.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Login from '../components/Login';
import Dialog from '../components/Dialog';
import { closeDialog } from '../actions/dialog';
import { createSession, fetchLocalSession } from '../actions/session';

const mapStateToProps = state => ({
  isDialog: state.dialog.isDialog,
  error: state.session.error,
  token: state.session.token,
});


const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(createSession(email, password));
  },
  redirectFeed: () => {
    dispatch(push('/feed'));
  },
  closeDialog: () => {
    dispatch(closeDialog());
  },
  fetchSession: () => {
    dispatch(fetchLocalSession());
  },
});

class LoginContainer extends Component {

  componentDidMount() {
    if (this.props.token) {
      this.props.redirectFeed();
    }
  }

  componentDidUpdate() {
    if (this.props.token) {
      this.props.redirectFeed();
    }
  }

  render() {
    if (this.props.token) {
      return null;
    }
    return (
      <div>
        <Login login={this.props.login} />
        <Dialog
          isDialog={this.props.isDialog}
          message={this.props.error.message}
          closeDialog={this.props.closeDialog}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
