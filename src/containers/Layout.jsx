/**
 * @fileoverview layoutContainer
 * @name Layout.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Layout from '../components/Layout';
import Dialog from '../components/Dialog';
import { closeDialog } from '../actions/dialog';

const mapStateToProps = state => ({
  token: state.session.token,
  isDialog: state.dialog.isDialog,
  error: state.profile.error,
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(closeDialog());
  },
  redirectLogin: () => {
    dispatch(push('/login'));
  },
});

class LayoutContainer extends Component {

  componentDidMount() {
    if (!this.props.token) {
      this.props.redirectLogin();
    }
  }

  render() {
    if (!this.props.token) {
      return null;
    }
    return (
      <div>
        <Dialog
          isDialog={this.props.isDialog}
          message={this.props.error.message}
          closeDialog={this.props.closeDialog}
        />
        <Layout children={this.props.children} />
      </div>
      );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContainer);
