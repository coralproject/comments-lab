import React, {Component, PropTypes} from 'react';
import { mediaQueries } from '../../playgroundSettings';
import {Cell} from 'react-mdl';

class BigProfilePicure extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return <Cell col={4} style={styles.pictureContainer}>
      <img className="bigProfilePicture" style={ styles.profilePicture } src={ '/img/playground/profile' + this.props.id + '.jpg' } />
      </Cell>;
    // return <CardTitle expand style={Object.assign({background:'url(/img/playground/profile' + this.props.id + '.jpg)'},styles.profilePicture)}/>;
  }
}

const defaultStyles = {
  pictureContainer: {
    width:'fit-content',
    display:'inline-block'
  },
  profilePicture: {
    height:100,
    width:100,
    margin:15,
    borderRadius:50
  }
  

};

export default BigProfilePicure;
