import React, {Component} from 'react';

class CommentDivider extends Component {
  render() {
    let styles = this.props.styles || defaultStyles;
    return <hr className="commentDivider" style={styles.commentDivider}/>;
  }
}

let defaultStyles = {
  commentDivider:{
    marginBottom:20
  }
};

export default CommentDivider;
