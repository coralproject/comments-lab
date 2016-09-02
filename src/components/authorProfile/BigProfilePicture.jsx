import React, {Component, PropTypes} from 'react';
import { mediaQueries } from '../../playgroundSettings';
import {CardTitle} from 'react-mdl';

class BigProfilePicure extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    // return <div style={styles.pictureContainer}>
    //   <img className="bigProfilePicture" style={ styles.profilePicture } src={ '/img/playground/profile' + this.props.id + '.jpg' } />
    //   </div>;
    return <CardTitle expand style={Object.assign({background:'url(/img/playground/profile' + this.props.id + '.jpg)'},styles.profilePicture)}/>;
  }
}

const defaultStyles = {
  pictureContainer: {
    float:'left'
  },
  profilePicture: {
    backgroundSize:'cover',
    height:200
  }
  

};

export default BigProfilePicure;
