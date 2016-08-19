import React, {Component, PropTypes} from 'react';

class StreamTabs extends Component {

  static propTypes = {
    activeTab:PropTypes.string.isRequired
  }

  onStaffClick() {
    return () => {

    };
  }

  onAllClick() {
    return () => {

    };
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return  <div style={ styles.streamTabs }>
      <button style={ [ styles.streamTab, this.props.activeTab == 'all' ? styles.activeTab : null ] } onClick={ this.onAllClick.bind(this) }>All</button>
      <button style={ [ styles.streamTab, this.props.activeTab == 'staff' ? styles.activeTab : null ] } onClick={ this.onStaffClick.bind(this) }>Staff Picks</button>
    </div>;
  }
}

const defaultStyles = {
  streamTabs: {
    borderBottom: '1px solid #ddd'
  },
  streamTab: {
    borderTop: '3px solid #ccc',
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    padding: '15px',
    fontSize: '14pt',
    fontWeight: '600',
    background: '#f0f0f0',
    marginTop: '10px',
    marginRight: '-1px',
    marginBottom: '-1px',
    cursor: 'pointer',
    outline: 'none'
  },
  activeTab: {
    borderTop: '3px solid red',
    borderBottom: '1px solid white',
    background: 'white'
  },
}

export default StreamTabs;
