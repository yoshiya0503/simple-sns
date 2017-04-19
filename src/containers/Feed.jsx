/**
 * @fileoverview FeedContainer
 * @name Feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FeedItems } from '../components/Feed';
import fetchFeeds from '../actions/feed';
import Dialog from '../components/Dialog';
import { closeDialog } from '../actions/dialog';

const mapStateToProps = state => ({
  isDialog: state.dialog.isDialog,
  error: state.feed.error,
  feeds: state.feed.feeds,
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(closeDialog());
  },
  fetchFeeds: () => {
    dispatch(fetchFeeds());
  },
});

class FeedContainer extends Component {

  componentWillMount() {
    this.props.fetchFeeds();
  }

  render() {
    return (
      <div>
        <FeedItems feeds={this.props.feeds}/>
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
)(FeedContainer);
