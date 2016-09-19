import React, {Component, PropTypes} from 'react';

class DynamicContainer extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    config: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {

  }
}

export default DynamicContainer;
  
