import React, {Component, PropTypes} from 'react';
import { mediaQueries } from '../../playgroundSettings';
import Comment from '../comments/CommentContainer';
import Author from '../authors/AuthorContainer';

class CommentStream extends Component {
  static PropTypes = {
    stream:PropTypes.array.isRequired
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return <div id="stream">
      <p style={ styles.commentCount }>{ this.props.stream.length } comments</p>
      <div>
        {
          this.props.stream.map((id) => {
            return <div key={id}>
              <Author commentId={id}/>
              <Comment id={id}/>
            </div>;
          })
        }
       </div> 
    </div>;
  }
}

let defaultStyles = {
  commentCount: {
    padding: '10px 0 0 0',
    fontStyle: 'italic',
    fontSize: '11pt',
    color: '#888'
  }
};

export default CommentStream;
