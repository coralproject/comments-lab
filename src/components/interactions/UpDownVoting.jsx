import React, {Component, PropTypes} from 'react';
import {Badge, Icon} from 'react-mdl';
import {updateItem} from 'playground/PlaygroundActions';

class UpDownVoting extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  incrementVote(type) {
    return (e) => {
      e.preventDefault();
      if (!this.props.updownvoted) {
        this.props.dispatch(updateItem(this.props.id,'comments',type,this.props[type]+1));
        this.props.dispatch(updateItem(this.props.id,'comments','updownvoted',true));
      }
    };
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div>
        <Icon onClick={this.incrementVote('upvotes').bind(this)} style={styles.voteIcon} className='upVoteIcon' name="arrow_upward" />
        <span style={styles.interactionCount} className='interactionCount'>{this.props.upvotes}</span>
        <Icon onClick={this.incrementVote('downvotes').bind(this)} style={styles.voteIcon} className='downVoteIcon' name="arrow_downward" />
        <span style={styles.interactionCount} className='interactionCount'>{this.props.downvotes}</span>
      </div>;
  }
}

export default UpDownVoting;

const defaultStyles = {
  voteIcon:{
    fontSize:18,
    cursor:'pointer'
  },
  interactionCount:{
    fontSize:10
  }
};
