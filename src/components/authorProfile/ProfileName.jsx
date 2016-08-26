import React, {Component, PropTypes} from 'react';
import {CardText} from 'react-mdl';

class ProfileBio extends Component {

  static propTypes = {
    nickName:PropTypes.string.isRequired
  }

  render() {
    return <CardText><strong>@{this.props.nickName}</strong></CardText>;
  }
}

export default ProfileBio;
