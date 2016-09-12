import React, {Component, PropTypes} from 'react';
import { IconButton } from 'react-mdl';
import { setSnackbar, updateItem } from 'playground/PlaygroundActions';

class DefaultFlag extends Component {

  constructor(props) {
    super(props);
    this.onFlagClick = this.onFlagClick.bind(this);
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  onFlagClick() {
    this.props.dispatch(setSnackbar({
      text:'Thank you for reporting this comment. Our moderation team has been notified and will review it shortly.'
    }));
    this.props.dispatch(updateItem(this.props.id, 'comments', 'flagged', true));
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <IconButton
      name='flag'
      style={this.props.flagged ? styles.flagged : styles.unflagged}
      onClick={this.onFlagClick} />;
  }
}

export default DefaultFlag;

const defaultStyles = {
  unflagged: {
    color:'#ccc'
  },
  flagged: {
    color:'#f36451'
  }
};
