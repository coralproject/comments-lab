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
        <FooterSection type="left" logo="Coral Playground">
                  <a href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location} style={styles.navLink}><img style={styles.shareIcon} src="/img/facebook.png"/></a>
                  <a href={'https://twitter.com/home?status=Think%20you%20could%20build%20a%20better%20comment%20system?%20Try%20it%20out%20at%20' + encodeURIComponent(window.location)} style={styles.navLink}><img style={styles.shareIcon} src="/img/twitter.png"/></a>
        </FooterSection>
        <FooterSection type="right">
          <FooterLinkList>
              <a href="#" onClick={this.onAboutClick.bind(this)}>About this tool</a>
              <a href="#">Send us Feedback</a>
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
  }
};
