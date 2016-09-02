import React, {Component} from 'react';
import {MenuItem} from 'react-mdl';

class Warn extends Component {

  render() {
    let styles = this.props.styles || defaultStyles;
    return <MenuItem style={styles.warn}>Warn</MenuItem>;
  }
}

export default Warn;

const defaultStyles = {
  warn:{
    color:'orange'
  }
};
