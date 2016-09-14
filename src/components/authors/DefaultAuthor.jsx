import React, {Component, PropTypes} from 'react';
import { mediaQueries } from '../../playgroundSettings';

class DefaultAuthor extends Component {

  render() {
    const styles = this.props.styles || defaultStyles;
    let displayName = <h4 style={ styles.userName} >
          {this.props.realName || this.props.nickName}
        </h4>;
    return (
      <div className="author" style={styles.author}>
        {displayName}
      </div>
    );
  }
}

DefaultAuthor.propTypes = {
  realName:PropTypes.string,
  nickName:PropTypes.string
};

export default DefaultAuthor;

let defaultStyles =   {
  userName: {
    fontSize: '12pt',
    fontWeight: '600',
    color: '#333',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '3px',
    verticalAlign:'top'
  },
  anonymous: {
    fontSize: '12pt',
    fontWeight: '600',
    color: '#333',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '3px',
    verticalAlign:'top',
    fontStyle:'italic'
  },
  author: {
    display:'inline-block'
  }
};
