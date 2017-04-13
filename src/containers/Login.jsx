/**
 * @fileoverview LoginContainer
 * @name Login.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { increments, decrements } from '../actions/login';

const mapStateToProps = state => ({
  test: state.login.test,
});

const mapDispatchToProps = dispatch => ({
  increments: () => {
    dispatch(increments(10));
  },
  decrements: () => {
    dispatch(decrements(4));
  },
});

class LoginContainer extends Component {

  render() {
    return (
      <Login increments={this.props.increments} test={this.props.test} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
