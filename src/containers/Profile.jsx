/**
 * @fileoverview ProfileContainer
 * @name Profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import fetchProfile from '../actions/profile';

const mapStateToProps = state => ({
  profile: state.profile.profile,
  isLoading: state.profile.isLoading,
  error: state.profile.error,
});

class ProfileContainer extends Component {

  componentWillMount() {
    this.props.dispatch(fetchProfile());
  }

  render() {
    // ここにローディングインディケータ
    if (this.props.isLoading) {
      return <p> Loading...</p>;
    }
    return (
      <Profile profile={this.props.profile} />
    );
  }
}

export default connect(
  mapStateToProps,
)(ProfileContainer);
