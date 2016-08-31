import React, {Component, PropTypes} from 'react';

class FollowTab extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'follow' ? 'is-active' : null)}
      style={styles.streamTab}
      onClick={ this.props.switchTab('follow') }>
      Follow
    </a>;
  }
}

export default FollowTab;

const defaultStyles = {
  streamTab: {
    cursor:'pointer'
  }
};
