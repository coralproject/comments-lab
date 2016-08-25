import React, {Component, PropTypes} from 'react';

class Block extends Component {

  static propTypes = {
    // id:PropTypes.string.isRequred
  }

  render() {
    return <li className="mdl-menu__item">Block</li>;
  }
}

export default Block;
