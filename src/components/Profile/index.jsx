/**
 * @fileoverview Profile
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component, PropTypes } from 'react';
import { Card, CardHeader } from 'material-ui/Card';

class Profile extends Component {

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.user.name}
          subtitle={this.props.user.profile}
          avatar={this.props.user.image}
        />
      </Card>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
