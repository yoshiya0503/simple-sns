/**
 * @fileoverview layoutContainer
 * @name Layout.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';

const mapStateToProps = state => ({
  token: state.session.token,
});

class LayoutContainer extends Component {

  componentWillMount() {
    if (!this.props.token) {
      this.props.router.push('/login');
    }
  }

  render() {
    if (!this.props.token) {
      return null;
    }
    return <Layout children={this.props.children} />;
  }
}

export default connect(
  mapStateToProps,
)(LayoutContainer);
