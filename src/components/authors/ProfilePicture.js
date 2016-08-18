import React, {Component, PropTypes} from 'react';
import { mediaQueries } from '../../playgroundSettings';

class ProfilePicture extends Component {

  render() {
    let styles = this.props.styles || defaultStyles;
    return <div className="profilePicPan" style={ styles.profilePicPane }>
      <img className="profilePicture" style={ styles.profilePicture } width="180" height="180" src={ '/img/playground/profile' + this.props.id + '.jpg' } /><br />
    </div>;
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
    [mediaQueries.mobile]: {
      width: '120px',
      height: '120px'
    }
  }
};

ProfilePicture.propTypes = {
  id:PropTypes.string.isRequired
};

export default ProfilePicture;
