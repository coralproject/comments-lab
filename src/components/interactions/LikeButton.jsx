import React, {Component, PropTypes} from 'react';
import {Badge, Icon} from 'react-mdl';
import {updateItem} from 'playground/PlaygroundActions';

class LikeButton extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  incrementLike(e) {
    e.preventDefault();
    if (!this.props.liked) {
      this.props.dispatch(updateItem(this.props.id,'comments','likes',this.props.likes+1));
      this.props.dispatch(updateItem(this.props.id,'comments','liked',true));
    }
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div>
        <Icon onClick={this.incrementLike.bind(this)} style={styles.likeIcon} className='likeIcon' name="thumb_up" />
        <span style={styles.interactionCount} className='interactionCount'>{this.props.likes}</span>
      </div>;
  }
}

export default LikeButton;

const defaultStyles = {
  likeIcon:{
    fontSize:18,
    cursor:'pointer'
  },
  interactionCount:{
    fontSize:10
  }
};
