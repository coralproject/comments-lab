import React, {Component, PropTypes} from 'react';

class AllTab extends Component {


  render() {
    const styles = this.props.styles || defaultStyles;
    return <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'all' ? 'is-active' : null)}
      style={styles.streamTab}
      onClick={ this.onAllClick.bind(this) }>
      All
    </a>;
  }
}

export default AllTab;

const defaultStyles = {
  streamTab: {
    cursor:'pointer'
  }
}
