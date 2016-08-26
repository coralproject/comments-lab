import React, {Component, PropTypes} from 'react';
import {CardText} from 'react-mdl';

class ProfileBio extends Component {

  static propTypes = {
    nickName:PropTypes.string.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyle;
    return <CardText style={styles.profileName}><strong>@{this.props.nickName}</strong></CardText>;
  }
}

export default ProfileBio;

const defaultStyle = {
  profileName: {
    paddingBottom:4
  }
};
