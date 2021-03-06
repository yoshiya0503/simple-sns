/**
 * @fileoverview ProfileContainer
 * @name Profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import LoadingIndicator from '../components/LoadingIndicator';
import fetchProfile from '../actions/profile';
import { stopScheduler } from '../actions/scheduler';

const mapStateToProps = state => ({
  isLoading: state.loading.isLoading,
  profile: state.profile.profile,
  scheduler: state.scheduler.scheduler,
});

class ProfileContainer extends Component {

  componentWillMount() {
    this.props.dispatch(fetchProfile());
  }

  componentWillUnmount() {
    this.props.dispatch(stopScheduler(this.props.scheduler));
  }

  render() {
    if (this.props.isLoading) {
      return <LoadingIndicator />;
    }
    return <Profile profile={this.props.profile} />;
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.any.isRequired,
  scheduler: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

ProfileContainer.defaultProps = {
  profile: {},
};

export default connect(
  mapStateToProps,
)(ProfileContainer);
