import React, {Component, PropTypes} from 'react';
import Authors from 'components/authors/AuthorContainer';
import Comments from 'components/comments/CommentContainer';
import Interactions from 'components/interactions/InteractionsContainer';

class Replies extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    replyIndex: PropTypes.array.isRequired,
    comments: PropTypes.object.isRequired
  }

  render() {
    let comment = this.props.comments[this.props.id].replies;
    let replies = this.props.replyIndex.reduce((priorComment, replyIndex) => {
      if (!priorComment) {
        return [];
      }
      return priorComment[replyIndex].replies;
    }, comment);
    replies = replies;

    const styles = this.props.styles || defaultStyles;
    return <div>
      {
        replies && 
        replies.map((reply,i) => {
          const newReplyIndex = this.props.replyIndex.concat(i);
          return <div className="replies" style={styles.replies} key={i}>
              <Authors commentId={this.props.id} replyIndex={newReplyIndex} />
              <Comments id={this.props.id} replyIndex={newReplyIndex} />
              <Interactions id={this.props.id} replyIndex={newReplyIndex} />
              <Replies
                id={this.props.id}
                replyIndex={newReplyIndex}
                comments = {this.props.comments}/>
            </div>;
        })
      }
    </div>;
  }
}

export default Replies;

const defaultStyles = {
  replies: {
    marginLeft:40,
    marginTop:20
  }
};
