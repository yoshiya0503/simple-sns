/**
 * @fileoverview FeedContainer
 * @name Feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FeedItems } from '../components/Feed';
import LoadingIndicator from '../components/LoadingIndicator';
import fetchFeeds from '../actions/feed';

const mapStateToProps = state => ({
  isLoading: state.loading.isLoading,
  feeds: state.feed.feeds,
});

const mapDispatchToProps = dispatch => ({
  fetchFeeds: () => {
    dispatch(fetchFeeds());
  },
});

class FeedContainer extends Component {

  componentDidMount() {
    this.props.fetchFeeds();
  }

  render() {
    if (this.props.isLoading) {
      return <LoadingIndicator />;
    }
    return <FeedItems feeds={this.props.feeds} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedContainer);
