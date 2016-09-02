import React, {Component, PropTypes} from 'react';

class CommentCount extends Component {

  static propTypes = {
    stream: PropTypes.array.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <p style={ styles.commentCount }>{ this.props.stream.length } comments</p>;
  }
}

export default CommentCount;

const defaultStyles = {
  commentCount: {
    padding: '10px 0 0 0',
    fontStyle: 'italic',
    fontSize: '11pt',
    color: '#888'
  }
};
