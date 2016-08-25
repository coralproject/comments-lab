import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import ReactEmoji from 'react-emoji';

class DefaultComment extends Component {

  render() {
    const styles = this.props.styles || defaultStyles;

    return (
      <div className='comment'>
        <div style={ styles.commentDate } className='commentDate'>{ moment().fromNow() }</div>
        <div style={ styles.commentContent } dangerouslySetInnerHTML={{__html:this.props.content}}/>
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
    marginBottom: '20px',
    width:'95%'
  }
};
