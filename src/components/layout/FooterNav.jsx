import React, {Component, PropTypes} from 'react';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {setTopic} from 'playground/PlaygroundActions';
import { connect } from 'react-redux';
@connect(state => state)
class FooterNav extends Component {

  static propTypes = {
    dispatch:PropTypes.func.isRequired
  }

  onAboutClick(e) {
    e.preventDefault();
    this.props.dispatch(setTopic('about'));
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <Footer size="mini" style={styles.footer}>
        <FooterSection type="left">
          <a href='https://coralproject.net' style={styles.titleLink}><strong>The Coral Poject</strong></a>
          <a href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location} style={styles.navLink}><img style={styles.shareIcon} src="/img/facebook.png"/></a>
          <a href={'https://twitter.com/home?status=Check%20out%20my%20comment%20box%20settings%20and%20build%20your%20own%20via%20%40coralproject' + encodeURIComponent(window.location)} style={styles.navLink}><img style={styles.shareIcon} src="/img/twitter.png"/></a>
        </FooterSection>
        <FooterSection type="right">
          <FooterLinkList>
              <a href="#" onClick={this.onAboutClick.bind(this)}>About this tool</a>
              <a href="https://coralproject.net/contribute.html#other-ideas-and-bug-reports" target="_blank">Send us Feedback</a>
          </FooterLinkList>
        </FooterSection>  
    </Footer>;
  }
}

export default FooterNav;

const defaultStyles = {
  footer:{
    background:'rgba(247,114,96,1)',
    color:'white'
  },
  shareIcon:{
    width:30,
    height:30
  },
  navLink:{
    margin:'25px 5px 0px 5px',
    padding:0
  },
  titleLink: {
    position: 'relative',
    top: -8,
    color: '#fff',
    textDecoration: 'none'
  }
};
