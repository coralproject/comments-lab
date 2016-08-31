import React, {Component, PropTypes} from 'react';
import {Grid, Cell} from 'react-mdl';

class Statistics extends Component {

  static propTypes = {
    comments:PropTypes.number.isRequired
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return <div style = {styles.stats}>
        <span style={styles.label}>Comments:</span> {this.props.comments}
      </div>;
  }
}

export default Statistics;

const defaultStyles = {
  label:{
    color:'grey'
  },
  stats:{
    paddingLeft:15,
    fontSize:12,
    lineHeight:1.2,
    marginBottom:10
  }
};
