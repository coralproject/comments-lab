import React, {Component, PropTypes} from 'react';
import ReactEmoji from 'react-emoji';
import {updateItem} from 'playground/PlaygroundActions';

class Reactions extends Component {

  constructor(props) {
    super(props);
    this.reactionClick = this.reactionClick.bind(this);
  }

  static propTypes = {
    reactions: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  }

  reactionClick(name) {
    return (e) => {
      e.preventDefault();
      let reactions = this.props.reactions.slice();
      reactions.reduce((prev, reaction) => {
        if (reaction.name == name) {
          if (reaction.clicked) {
            return;
          }
          reaction.count++;
          reaction.clicked = true;
        }
      },null);
      this.props.dispatch(updateItem(this.props.id,'comments','reactions',reactions));
    };
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div className="reactions">
      {
        this.props.reactions.map((reaction) => {
          return <div className='reactionEmoji' style={styles.reactionEmoji} key={reaction.name} onClick = {this.reactionClick(reaction.name)}> 
              {ReactEmoji.emojify(':' + reaction.name + ':')}
              <span style={styles.interactionCount} className='interactionCount'>{reaction.count}</span>
            </div>;

        })
      }
    </div>;
  }
}

export default Reactions;

const defaultStyles = {
  reactionEmoji: {
    padding:1,
    borderRadius: 3,
    display: 'inline-block',
    opacity:.75,
    margin: 2,
    cursor: 'pointer'
  },
  interactionCount:{
    fontSize:10
  }
};
