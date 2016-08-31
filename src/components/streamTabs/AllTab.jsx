import React, {Component, PropTypes} from 'react';

class AllTab extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'all' ? 'is-active' : null)}
      style={styles.streamTab}
      onClick={ this.props.switchTab('all')}>
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
