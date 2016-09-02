import React, {Component, PropTypes} from 'react';
import ReactEmoji from 'react-emoji';

class DefaultComment extends Component {

  render() {
    const styles = this.props.styles || defaultStyles;

    return (
      <div className='comment'>
        <div style={ styles.commentContent } className='commentContent' dangerouslySetInnerHTML={{__html:this.props.content}}/>
      </div>
    );
  }
}

DefaultComment.propTypes = {
  content:PropTypes.string.isRequired
};

export default DefaultComment;

let defaultStyles =   {
  commentContent: {
    fontSize: '12pt',
    marginBottom: '5px',
    width:'95%'
  }
};
