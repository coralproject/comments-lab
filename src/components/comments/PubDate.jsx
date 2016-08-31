import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class PubDate extends Component {

  static propTypes = {
    pubdate:PropTypes.number
  }

  render() {
    let time = new Date().getTime();
    if (this.props.pubdate) {
      time = time - this.props.pubdate;
    }
    const styles = this.props.styles || defaultStyles;
    return <div style={ styles.commentDate } className='commentDate'>
      { moment(time).fromNow() }
    </div>;
  }
}

export default PubDate;

const defaultStyles =   {
  commentDate: {
    fontSize: '10pt',
    color: '#999',
    marginBottom: '5px'
  }
};
