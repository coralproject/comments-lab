import React, {Component, PropTypes} from 'react';
import {Cell} from 'react-mdl';

class ProfileBio extends Component {

  static propTypes = {
    nickName:PropTypes.string.isRequired,
    membershipAge: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyle;
    return <Cell col={8} style={styles.profileName}>
      <strong>@{this.props.nickName}</strong>
      <p style={styles.userInfo}>
        Member for: {this.props.membershipAge}<br/>
        Location: {this.props.location}<br/>
        Education: {this.props.education}<br/>
      </p>
    </Cell>;
  }
}

export default ProfileBio;

const defaultStyle = {
  profileName: {
    paddingBottom:4,
    marginTop:20
  },
  userInfo: {
    fontSize:14,
    color:'#999',
    marginLeft:5
  }
};
