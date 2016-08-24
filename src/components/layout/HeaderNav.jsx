import React, {Component} from 'react';
import {Layout, Header, Navigation} from 'react-mdl';
import {setTopic} from 'playground/PlaygroundActions';
import { connect } from 'react-redux';
@connect(state => state)

class HeaderNav extends Component {

  onAboutClick(e) {
    e.preventDefault();
    this.props.dispatch(setTopic('about'));
  }

  render() {
    const styles = this.props.styles || defaultStyles;

    return <Layout fixedHeader style={styles.headerLayout}>
            <Header title={<span><strong>Coral Playground</strong></span>} style={styles.header}>
                <Navigation>
                  <a href="#" onClick={this.onAboutClick.bind(this)}>About</a>                  
                  <a href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location} style={styles.navLink}><img style={styles.shareIcon} src="/img/facebook.png"/></a>
                  <a href={'https://twitter.com/home?status=Think%20you%20could%20build%20a%20better%20comment%20system?%20Try%20it%20out%20at%20' + encodeURIComponent(window.location)} style={styles.navLink}><img style={styles.shareIcon} src="/img/twitter.png"/></a>
                </Navigation>
            </Header>
        </Layout>;
  }
}

export default HeaderNav;

const defaultStyles = {
  headerLayout: {
    height: 64,
    position:'relative'
  },
  header: {
    background: 'rgba(247,114,96,1)'
  },
  navLink:{
    margin:'20px 5px 0px 5px',
    padding:0
  },
  shareIcon:{
    width:30,
    height:30
  }
};
