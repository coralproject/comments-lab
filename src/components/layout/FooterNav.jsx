import React, {Component} from 'react';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';

class FooterNav extends Component {

  render() {
    const styles = this.props.styles || defaultStyles;
    return <Footer size="mini" style={styles.footer}>
        <FooterSection type="left" logo="Coral Playground">
            <FooterLinkList>
                <a href="#">Share</a>
            </FooterLinkList>        
        </FooterSection>
        <FooterSection type="right">
          <FooterLinkList>
              <a href="#">About</a>
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
  }
};
