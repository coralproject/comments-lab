import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class DefaultComment extends Component {
  render() {
    const styles = this.props.styles || defaultStyles;

    return (
      <div className="comment">
        <div style={ styles.commentDate } className="commentDate">{ moment().fromNow() }</div>
        <div className="commentContent" style={ styles.commentContent} >
          {this.props.content}
        </div>
      </div>
    );
  }
}

DefaultComment.propTypes = {
  content:PropTypes.string.isRequired
};

export default DefaultComment;

let defaultStyles =   {
  commentDate: {
    fontSize: '10pt',
    color: '#999',
    marginBottom: '5px'
  },
  commentContent: {
    fontSize: '12pt',
    minHeight: '60px'
  }
};
