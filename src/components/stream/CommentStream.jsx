import React, {Component, PropTypes} from 'react';
import Comment from '../comments/CommentContainer';
import Author from '../authors/AuthorContainer';
import Profile from '../authorProfile/AuthorProfileContainer';
import {Card} from 'react-mdl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      this.props.dispatch(updateItem(id, 'comments', 'showProfile', !this.props.comments[id].showProfile));
    };
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return <div id="stream">
      <p style={ styles.commentCount }>{ this.props.stream.length } comments</p>
      <div>
        {
          this.props.stream.map((id) => {
            return <div key={id} >
              <div onClick={this.onAuthorClick(id).bind(this)}>
                <Author commentId={id} />
              </div>
                {
                  this.props.comments[id].showProfile &&
                  <Card shadow={1} style={styles.profileCard}>
                    <Profile commentId={id}/>
                  </Card>
                }
              <Comment id={id} />
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
  },
  profileCard:{
    width:200,
    margin:20
  }
};

export default CommentStream;
