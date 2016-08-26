import React, {Component, PropTypes} from 'react';
import Comment from '../comments/CommentContainer';
import Author from '../authors/AuthorContainer';
import Profile from '../authorProfile/AuthorProfileContainer';
import {Card} from 'react-mdl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CommentStream extends Component {

  static PropTypes = {
    stream:PropTypes.array.isRequired,
    comments:PropTypes.object.isRequired
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
              <ReactCSSTransitionGroup
                  transitionName='togglerGroup'
                  transitionEnterTimeout={250}
                  transitionLeaveTimeout={250}>
                {
                  this.props.comments[id].showProfile &&
                  <Card shadow={1} style={styles.profileCard}>
                    <Profile commentId={id}/>
                  </Card>
                }
              </ReactCSSTransitionGroup>
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
  },
  profileCard:{
    width:200,
    margin:20
  }
};

export default CommentStream;
