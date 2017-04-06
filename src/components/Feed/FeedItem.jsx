/**
 * @fileoverview Feed_Item
 * @name Item.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class FeedItem extends Component {

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.feed.user.name}
          avatar={this.props.feed.user.image}
        />
        <CardTitle title={this.props.feed.title} />
        <CardText>
          { this.props.feed.body }
        </CardText>
        <CardActions>
          <FlatButton label="編集" />
          <FlatButton label="削除" />
        </CardActions>
      </Card>
    );
  }
}

FeedItem.propTypes = {
  feed: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FeedItem;
