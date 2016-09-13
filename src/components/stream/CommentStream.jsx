import React, {Component, PropTypes} from 'react';
import Comment from '../comments/CommentContainer';
import Author from '../authors/AuthorContainer';
import Profile from '../authorProfile/AuthorProfileContainer';
import Interactions from '../interactions/InteractionsContainer';
import Flag from '../flag/FlagContainer';
import CommentMenu from '../commentMenu/CommentMenuContainer';
import Replies from '../replies/RepliesContainer';
import {updateItem} from 'playground/PlaygroundActions';

class CommentStream extends Component {

  static PropTypes = {
    stream:PropTypes.array.isRequired,
    comments:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  onAuthorClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.dispatch(
        updateItem(id, 'comments', 'showProfile', !this.props.comments[id].showProfile)
      );
    };
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return <div id="stream">
      <div>
        {
          this.props.stream.map((id) => {
            return <div key={id} >
              <div onClick={this.onAuthorClick(id).bind(this)}>
                <Author commentId={id} />
              </div>
              <Profile commentId={id}/>
              <CommentMenu id={id}/>
              <Flag id={id} />
              <Comment id={id} />
              <Interactions id={id}/>
              <Replies id={id} replyIndex={[]} />
              <hr className="commentDivider" style={styles.commentDivider}/>
            </div>;
          })
        }
       </div> 
    </div>;
  }
}

let defaultStyles = {
  commentDivider:{
    marginBottom:20
  }
};

export default CommentStream;
