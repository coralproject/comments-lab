import React, {Component, PropTypes} from 'react';
import {CardText} from 'react-mdl';

class ProfileBio extends Component {

  static propTypes = {
    nickName:PropTypes.string.isRequired,
    membershipAge: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyle;
    return <CardText style={styles.profileName}>
      <strong>@{this.props.nickName}</strong>
      <p style={styles.userInfo}>
        Member for: {this.props.membershipAge}<br/>
        Location: {this.props.location}<br/>
        education: {this.props.education}<br/>
      </p>
    </CardText>;
  }
}

export default ProfileBio;

const defaultStyle = {
  profileName: {
    paddingBottom:4
  },
  userInfo: {
    fontSize:14,
    color:'#999',
    marginLeft:5
  }
};
