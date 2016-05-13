import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import Comment from './Comment';

import { themes } from '../../playgroundSettings';

@connect(state => state.playground)
@Radium
class Stream extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 'all', commentCount: 0 };
    this.commentCounter = 0;
    console.log(this.props.blockedUsers);
  }

  getComments(comments, depth = 0, parentIndex = false, parents = []) {
    var parents = parents;
    return comments.map((comment, i) => {
      if (
            this.props.blockedUsers.indexOf(comment.user) == -1 &&
            (this.state.activeTab == 'all' || (this.state.activeTab == 'staff' && comment.staffPick))
         )
      {
        this.commentCounter++;

        return (
          <div style={ depth > 0 ? { marginLeft: '25px' } : null }>
            <Comment {...comment} key={ i } index={ i } depth={ depth } parents={ parents.concat([i]) } />
            {
              this.props.togglerGroups.stream.togglers.replies.status && comment.replies ?
                this.getComments(comment.replies, depth + 1, i, parents.concat([i]))
              :
                null
            }
          </div>
        );
      }
    });
  }

  componentDidUpdate() {
    /*if (this.props.togglerGroups.experimental.togglers.streamheat.status) {
      console.log("Drawing stream heatmap", this.canvas);

      this.commentCount = 0;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.clearRect(0, 0, 100, 200);

      this.drawStreamHeat(this.props.comments);

    }*/
  }

  drawStreamHeat(comments, depth = 0, parentIndex = false, parents = []) {
    var parents = parents;
    return comments.map((comment, i) => {
      if (
            this.props.blockedUsers.indexOf(comment.user) == -1 &&
            (this.state.activeTab == 'all' || (this.state.activeTab == 'staff' && comment.staffPick))
         )
      {
        this.commentCount++;
        this.ctx.fillStyle = '#222';
        this.ctx.fillRect(5 + (depth * 10), (this.commentCount * 18), 30, 3);

        this.ctx.fillStyle = '#ccc';
        this.ctx.fillRect(5 + (depth * 10), 6 + (this.commentCount * 18), 60, 3);
        this.ctx.fillRect(5 + (depth * 10), 12 + (this.commentCount * 18), 60, 3);

        return (
            this.props.togglerGroups.stream.togglers.replies.status && comment.replies ?
              this.drawStreamHeat(comment.replies, depth + 1, i, parents.concat([i]))
            :
              null
        );
      }
    });
  }



  onTabClick(tab, e) {
    this.setState({ activeTab: tab })
  }

  render() {

    this.commentCounter = 0;
    var comments = this.getComments(this.props.comments);

    return (
      <div style={ [ styles.stream ]}>
        <div style={ styles.streamHeat }>
          <canvas ref={(c) => { this.canvas = c }}  width="100" height="200" style={ styles.streamHeatCanvas }></canvas>
        </div>
        {
          this.props.togglerGroups.moderation.togglers.staffpicks.status ?
            <div>
              <div style={ styles.streamTabs }>
                <button style={ [ styles.streamTab, this.state.activeTab == 'all' ? styles.activeTab : null ] } onClick={ this.onTabClick.bind(this, 'all') }>All</button>
                <button style={ [ styles.streamTab, this.state.activeTab == 'staff' ? styles.activeTab : null ] } onClick={ this.onTabClick.bind(this, 'staff') }>Staff Picks</button>
              </div>
              <div>
                <p style={ styles.commentCount }>{ this.commentCounter } comments</p>
                { comments }
              </div>

            </div>
          :
            <div>
              <p style={ styles.commentCount }>{ this.commentCounter } comments</p>
              { comments }
            </div>
        }
      </div>
    );

  }
}

// same as the @connect decorator above
export default Stream;

var styles = {
  stream: {
    position: 'relative'
  },
  withStreamHeat: {
    paddingRight: '100px'
  },
  streamTabs: {
    borderBottom: '1px solid #ddd'
  },
  streamTab: {
    borderTop: '3px solid #ccc',
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    padding: '15px',
    fontSize: '14pt',
    fontWeight: '600',
    background: '#f0f0f0',
    marginTop: '10px',
    marginRight: '-1px',
    marginBottom: '-1px',
    cursor: 'pointer',
    outline: 'none'
  },
  activeTab: {
    borderTop: '3px solid red',
    borderBottom: '1px solid white',
    background: 'white'
  },
  commentCount: {
    padding: '10px 0 0 0',
    fontStyle: 'italic',
    fontSize: '11pt',
    color: '#888'
  },
  streamHeat: {
    position: 'absolute',
    top: '0px',
    right: '0px'
  },
  streamHeatCanvas: {
    width: '100px'
  }
};
