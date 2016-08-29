import React, {Component, PropTypes} from 'react';
import ReactEmoji from 'react-emoji';

class Reactions extends Component {

  static propTypes = {
    reactions: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div className="reactions">
      {
        this.props.reactions.map((reaction) => {
          return <div className='reactionEmoji' style={styles.reactionEmoji}> 
              {ReactEmoji.emojify(':' + reaction + ':')}
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
    border: '1px solid grey',
    borderRadius: 3,
    display: 'inline-block',
    opacity:.75,
    margin: 2
  }
};
