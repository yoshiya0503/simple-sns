/**
 * @fileoverview ProfileContainer
 * @name Profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import LoadingIndicator from '../components/LoadingIndicator';
import Dialog from '../components/Dialog';
import fetchProfile from '../actions/profile';
import { openDialog, closeDialog } from '../actions/dialog';

const mapStateToProps = state => ({
  profile: state.profile.profile,
  isLoading: state.profile.isLoading,
  error: state.profile.error,
  isDialog: state.dialog.isDialog,
});

class ProfileContainer extends Component {

  componentWillMount() {
    this.props.dispatch(fetchProfile()).then(() => {
      if (this.props.error.message) {
        this.props.dispatch(openDialog());
      } else {
        const schedule = setInterval(
          () => {
            console.log('hoge');
          },
          1000,
        );
        this.setState({
          scheduler: schedule,
        });
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.scheduler);
    this.setState({
      scheduler: null,
    });
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
          closeDialog={() => {this.props.dispatch(closeDialog())}}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ProfileContainer);
