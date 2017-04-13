/**
 * @fileoverview Profile
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';


class Profile extends Component {

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.profile.name}
          subtitle={this.props.profile.profile}
          avatar={this.props.profile.image}
        />
        <CardText>
          これはサンプル これはサンプル これはサンプル これはサンプル
          <br />
          これはサンプル これはサンプル これはサンプル これはサンプル
          <br />
          これはサンプル これはサンプル これはサンプル これはサンプル
          <br />
          これはサンプル これはサンプル これはサンプル これはサンプル
          <br />
        </CardText>
      </Card>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
