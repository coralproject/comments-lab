import React, {Component, PropTypes} from 'react';
import { mediaQueries } from '../../playgroundSettings';

class ProfilePicture extends Component {

  render() {
    let styles = this.props.styles || defaultStyles;
    return <img className="profilePicture" style={ styles.profilePicture } src={ '/img/playground/profile' + this.props.id + '.jpg' } />;
  }
}

const defaultStyles = {
  profilePicPane: {
    width: '180px',
    [mediaQueries.mobile]: {
      width: '120px',
      position: 'absolute',
      top: '0px',
      left: '0px'
    }
  },
  profilePicture: {
    width:60,
    height:60,
    borderRadius:30,
    float:'left',
    marginRight:20,
    [mediaQueries.mobile]: {
      width: '120px',
      height: '120px',
      borderRadius:25
    }
  }
};

ProfilePicture.propTypes = {
  id:PropTypes.string.isRequired
};

export default ProfilePicture;
