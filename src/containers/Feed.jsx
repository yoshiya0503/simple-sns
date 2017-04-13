/**
 * @fileoverview FeedContainer
 * @name Feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FeedItems } from '../components/Feed';
import fetchFeeds from '../actions/feed';

const mapStateToProps = state => ({
  feeds: state.feed.feeds,
});

class FeedContainer extends Component {

  componentWillMount() {
    this.props.dispatch(fetchFeeds());
  }

  render() {
    return (
      <FeedItems feeds={this.props.feeds}/>
    );
  }
}

export default connect(
  mapStateToProps,
)(FeedContainer);
