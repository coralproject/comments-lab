import React, {Component, PropTypes} from 'react';
import { Cell } from 'react-mdl';
import { setSnackbar } from 'playground/PlaygroundActions';

class ProfileBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackbar:false
    };
    this.toggleSnackbar = this.toggleSnackbar.bind(this);
  }

  static propTypes = {
    nickName:PropTypes.string.isRequired,
    membershipAge: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  toggleSnackbar() {
    this.props.dispatch(setSnackbar({
      text:'Thank you for reporting this profile. Our moderation team has been notified and will review it shortly.'
    }));
  }

  render() {
    const styles = this.props.styles || defaultStyle;
    return <Cell col={6} style={styles.profileName}>
      <strong>@{this.props.nickName}</strong>
      <p style={styles.userInfo}>
        Member for: {this.props.membershipAge}<br/>
        Location: {this.props.location}<br/>
        Education: {this.props.education}<br/>
      </p>
      <div
        style={styles.reportLink}
        onClick={this.toggleSnackbar}>
        Report this Profile
      </div>
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
  },
  reportLink: {
    fontSize: 12,
    marginTop:10,
    fontStyle: 'italic',
    color:'#f36451',
    cursor: 'pointer'
  }
};
