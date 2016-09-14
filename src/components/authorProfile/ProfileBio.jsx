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
    membershipAge: PropTypes.string,
    location: PropTypes.string,
    education: PropTypes.string,
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
      <div style={styles.userInfo}>
        {
          this.props.membershipAge && <div>Member for: {this.props.membershipAge}</div>
        }
        {
          this.props.location && <div>Location: {this.props.location}</div>

        }
        {
          this.props.education && <div>Education: {this.props.education}</div>
        }
      </div>
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
