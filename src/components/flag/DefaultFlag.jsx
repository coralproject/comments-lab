import React, {Component, PropTypes} from 'react';
import { IconButton } from 'react-mdl';

class DefaultFlag extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <IconButton name='flag' style={this.props.flagged ? styles.flagged : styles.unflagged}/>;
  }
}

export default DefaultFlag;

const defaultStyles = {
  unflagged: {
    color:'#ccc'
  },
  flagged: {
    color:'red'
  }
};
