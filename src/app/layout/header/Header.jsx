import React, {PropTypes} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

import MdMenu from 'react-icons/lib/md/menu';
import Button from 'components/Button';
import LanguageSwitcher from 'app/layout/LanguageSwitcher';
import settings from 'settings';

@connect()
@Radium
class Header extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleClick() {
    this.props.onHamburgerClick();
  }

  render() {
    return (
      <nav style={styles.nav}>
        <MdMenu style={styles.sidebarToggle} onClick={this.handleClick.bind(this)} />
        {/*<Searchbar style={styles.searchbar}/>*/}
        <LanguageSwitcher />
      </nav>
    );
  }
}

const styles = {
  sidebarToggle: {
    float: 'left',
    width: 36,
    height: 36,
    fill: 'white',
    paddingLeft: 10,
    paddingTop: 10,
    cursor: 'pointer'
  },
  logoutDisabled: {
    display: 'none'
  },
  nav: {
    marginBottom: 0,
    border: 'none',
    minHeight: '50px',
    borderRadius: 0,
    backgroundColor: settings.brandColor
  },
  logoutButton: {
    float: 'right',
    marginRight: 8,
    marginTop: 8
  },
  searchbar: {
    width: '40%'
  }
};

export default Header;
