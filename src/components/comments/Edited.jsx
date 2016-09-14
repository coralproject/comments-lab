import React, {Component, PropTypes} from 'react';

class Edited extends Component {

  static propTypes = {
    edited: PropTypes.bool
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div style={styles.edited}>
      {this.props.edited && '(Edited)'}
    </div>;
  }
}

export default Edited;

const defaultStyles = {
  edited: {
    display: 'inline-block',
    marginLeft: 5,
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic'
  }
};
