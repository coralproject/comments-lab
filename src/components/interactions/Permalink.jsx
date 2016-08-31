import React, {Component, PropTypes} from 'react';
import {Icon} from 'react-mdl';

class Permalink extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired
  } 

  render() {
    const styles = this.props.styles || defaultStyles;
    return <a href='#' style={styles.permalink} className="permalink" >
      <Icon name="link"/>
    </a>;
  }
}

export default Permalink;

const defaultStyles = {
  permalink: {
    color: '#000'
  }
};
