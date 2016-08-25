import React, {Component, PropTypes} from 'react';
import FaChevDown from 'react-icons/lib/fa/chevron-down';
import CommentMenuOptionsContainer from 'components/commentMenuOptions/CommentMenuOptionsContainer';

class CommentMenu extends Component {

  static propTypes = {
    id:PropTypes.string.isRequired    
  }

  componentWillMount() {
    this.setState({menuOpen:false});
  }

  render() {
    return <CommentMenuOptionsContainer id={this.props.id}/>;
  }
}

export default CommentMenu;
