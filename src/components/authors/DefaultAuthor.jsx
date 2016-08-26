import React, {Component, PropTypes} from 'react';
import { mediaQueries } from '../../playgroundSettings';

class DefaultAuthor extends Component {

  render() {
    const styles = this.props.styles || defaultStyles;
    let displayName = <h4 style={ styles.userName} >
          {this.props.realName || this.props.nickName}
        </h4>;
    if (this.props.allowAnon && this.props.anonymous) {
      displayName = <h4 style={styles.anonymous}>Anonymous</h4>;
    }
    return (
      <div className="author">
        {displayName}
      </div>
    );
  }
}

DefaultAuthor.propTypes = {
  realName:PropTypes.string,
  nickName:PropTypes.string,
  allowAnon: PropTypes.bool,
  anonymous: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
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
  }
};
