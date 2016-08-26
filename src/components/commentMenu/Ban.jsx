import React, {Component} from 'react';
import {MenuItem} from 'react-mdl';

class Ban extends Component {

  render() {
    let styles = this.props.styles || defaultStyles;
    return <MenuItem style={styles.ban}>Ban</MenuItem>;
  }
}

export default Ban;

const defaultStyles = {
  ban:{
    color:'red'
  }
};
