import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
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

    return <div style={styles.headerPadding}>
        <Layout fixedHeader style={styles.headerLayout}>
            <Header 
              title={
              <span>
                <img style={styles.logo} src="img/logo_white.png"/>
                <strong><a href="https://coralproject.net" target="_blank" style={styles.logoLink}>The Coral Project</a></strong>
              </span>
            } style={styles.header}>
                <Navigation>
                  <a href="#" onClick={this.onAboutClick.bind(this)}>About</a>
                  <a href="#" >Share</a>
                  <a href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location} style={styles.navLink}><img style={styles.shareIcon} src="/img/facebook.png"/></a>
                  <a href={'https://twitter.com/home?status=Check%20out%20my%20comment%20box%20settings%20and%20build%20your%20own%20via%20%40coralproject' + encodeURIComponent(window.location)} style={styles.navLink}><img style={styles.shareIcon} src="/img/twitter.png"/></a>
                </Navigation>
            </Header>
            <Drawer title="The Coral Project">
              <Navigation>
                  <a href="#" onClick={this.onAboutClick.bind(this)}>About</a>
                  <a href="https://coralproject.net/contribute.html#other-ideas-and-bug-reports" target="_blank">Send us Feedback</a>
                  <a href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location}>Share on Facebook</a>
                  <a href={'https://twitter.com/home?status=Check%20out%20my%20comment%20box%20settings%20and%20build%20your%20own%20via%20%40coralproject' + encodeURIComponent(window.location)}>Share on Twitter</a>
                  <a href='https://coralproject.net' target='_blank'>Coral Project Homepage</a>
              </Navigation>
          </Drawer>
        </Layout>
        </div>;
  }
}

export default HeaderNav;

const defaultStyles = {
  header: {
    background: 'rgba(247,114,96,1)'
  },
  navLink:{
    margin:'20px 0px 0px 0px',
    padding:0
  },
  share:{
    margin:0,
    padding:0,
    cursor:'default'
  },
  shareIcon:{
    width:30,
    height:30
  },
  logo: {
    width: 20,
    height:20,
    marginRight: 10,
    verticalAlign: 'bottom'
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none'
  },
  headerPadding:{
    height:70
  }
};
