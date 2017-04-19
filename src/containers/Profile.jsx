/**
 * @fileoverview ProfileContainer
 * @name Profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import LoadingIndicator from '../components/LoadingIndicator';
import Dialog from '../components/Dialog';
import fetchProfile from '../actions/profile';
import { closeDialog } from '../actions/dialog';
import { stopScheduler } from '../actions/scheduler';

const mapStateToProps = state => ({
  profile: state.profile.profile,
  isLoading: state.profile.isLoading,
  error: state.profile.error,
  isDialog: state.dialog.isDialog,
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
    return (
      <div>
        <Profile profile={this.props.profile} />
        <Dialog
          isDialog={this.props.isDialog}
          message={this.props.error.message}
          closeDialog={() => { this.props.dispatch(closeDialog()); }}
        />
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
  isDialog: PropTypes.bool.isRequired,
  scheduler: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

ProfileContainer.defaultProps = {
  profile: {},
  isLoading: false,
  error: {},
  isDialog: false,
};

export default connect(
  mapStateToProps,
)(ProfileContainer);
