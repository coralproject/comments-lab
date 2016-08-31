import React, {Component, PropTypes} from 'react';

class Reply extends Component {

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
    replies = replies || [];

    const styles = this.props.styles || defaultStyles;

    return <div>
      {
        replies.length > 0 && 
        replies.map((reply,i) => {
          return <div className="replies" style={styles.replies}>
              {reply.content}
              <Reply
                id={this.props.id}
                replyIndex={this.props.replyIndex.concat(i)}
                comments = {this.props.comments}/>
            </div>;
        })
      }
    </div>;
  }
}

export default Reply;

const defaultStyles = {
  replies: {
    marginLeft:40
  }
}
