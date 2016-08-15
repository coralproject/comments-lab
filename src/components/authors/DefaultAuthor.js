import React, {Component, PropTypes} from 'react';

class DefaultAuthor extends Component {
  render() {
    const styles = this.props.styles || defaultStyles;

    return (
      <div className="author">
        <h4 style={ styles.userName} >
          {this.props.realName || this.props.nickName}
        </h4>
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
    marginBottom: '3px'
  },
};
