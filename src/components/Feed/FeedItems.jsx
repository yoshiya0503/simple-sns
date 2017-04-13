/**
 * @fileoverview Feed_Items
 * @name Items.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FeedItem from './FeedItem';


class FeedItems extends Component {

  createFeedList() {
    console.log(this.props.feeds)
    return _.map(this.props.feeds, (feed) => {
      return (
        <div>
          <FeedItem feed={feed} />
          <Divider />
        </div>
      );
    });
  }

  render() {
    return (
      <List>
        { this.createFeedList() }
      </List>
    );
  }
}
FeedItems.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default FeedItems;
