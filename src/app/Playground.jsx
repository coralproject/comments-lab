// Framework tools
import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

// Playground-specific imports
import Sidebar from 'components/playground/Sidebar';
import Customizer from 'components/playground/Customizer';
import Preview from 'components/playground/Preview';

import DocumentTitle from 'react-document-title';

import { themes as themes, mediaQueries as mediaQueries } from 'playgroundSettings';

// Playground CSS
require('../../css/playground.css');
require('../../fonts/playground/coral-icon-font.css');

@connect(state => state.tags)
@Radium
class Playground extends React.Component {
  render() {

    return (
      <DocumentTitle title="Coral Playground">

        <div>

          <div style={ [ styles.playgroundContainer ] }>

            <div style={ styles.playgroundLeftPane }>

              <div style={ [ styles.playGround ] }>

                <img src="http://coralproject.github.io/design/img/logos/coralWordMark-1.5.png" style={ styles.logo } />

                <div style={ styles.heading }>

                  <h1 style={ styles.headingTitle }>Playground</h1>

                  <div style={ styles.playgroundIntro }>

                    <p style={ styles.playgroundIntroText }>
                      An interactive catalog<br />of commenting tools
                    </p>
                  </div>

                </div>

                <div style={ styles.about }>

                  <h2 style={ styles.aboutTitle }>
                    <span style={ styles.aboutTitleSpan }>ABOUT</span>
                  </h2>

                  <div style={ styles.playgroundDescription }>
                    This playground showcases the various elements you would usually find in commentary sections all over the web.
                    <br /><br />
                    <ul style={ styles.playgroundBullets }>
                      <li style={ styles.playgroundBullet }><strong>Use the controls</strong> to tweak the UI and explore how it affects the comment box and the stream. You can also try the features on the comment box and the stream itself.</li>
                      <li style={ styles.playgroundBullet }><strong>Learn more about online comments</strong>, the issues they are facing, and the purpose and history of the features we see everyday on comment streams,
                      through the expandable panel below.</li>
                    <li style={ styles.playgroundBullet }><strong>Share your thoughts</strong> on the problems addressed by each solution.</li>
                    <li style={ styles.playgroundBullet }><strong>Interested in <span style={ styles.experimentsLabel }>experiments?</span></strong> For comments with a twist, check out the "Experimental" section of the customizer down below.</li>
                    </ul>
                  </div>

                </div>

                <Customizer />

                {/*
                <div style={ styles.footer }>
                  Medal, Trophy and Badge icons by Zlatko Najdenovski from the Noun Project

                  Badge by Mark Shorter from the Noun Project

                  
                </div>
                */}

              </div>

            </div>

            <div style={ styles.playgroundMiddlePane }>
              <Preview />
            </div>

            <div style={ styles.playgroundRightPane }></div>

            <Sidebar />

          </div>

        </div>

      </DocumentTitle>
    );
  }
}

// same as the @connect decorator above
export default Playground;

const styles = {
  playgroundContainer: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    [mediaQueries.tablet]: {
      position: 'relative',
      height: 'auto',
      overflowY: 'auto'
    }
  },
  playgroundLeftPane: {
    width: '35%',
    height: '100%',
    overflowY: 'auto',
    'float': 'left',
    background: 'linear-gradient(to right, rgba(247,114,96,1) 0%, rgba(252,149,70,1) 100%)',
    [mediaQueries.desktop]: {
      width: '40%'
    },
    [mediaQueries.tablet]: {
      'float': 'none',
      width: '100%',
      height: 'auto'
    }
  },
  playgroundMiddlePane: {
    width: '65%',
    height: '100%',
    overflowY: 'auto',
    'float': 'left',
    [mediaQueries.desktop]: {
      width: '60%'
    },
    [mediaQueries.tablet]: {
      'float': 'none',
      width: '100%',
      height: 'auto'
    }
  },
  playgroundRightPane: {
    width: '15%',
    height: '100%',
    'float': 'left',
    [mediaQueries.desktop]: {
      width: '0%'
    },
    [mediaQueries.tablet]: {
      'float': 'none',
      display: 'none'
    }
  },
  playGround: {
    margin: 'auto',
    transition: 'filter 1s',
    fontFamily: themes.default.fontFamily
  },
  playgroundDescription: {
    paddingTop: '20px'
  },
  heading: {
    padding: '40px'
  },
  headingTitle: {
    fontFamily: 'Josefin Slab',
    textTransform: 'uppercase',
    fontSize: '45px',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    [mediaQueries.desktop]: {
      fontSize: '38px'
    },
    [mediaQueries.tablet]: {
      fontSize: '36px'
    }
  },
  playgroundIntro: {
    fontSize: '14pt',
    color: 'white',
    lineHeight: '1.2',
    padding: '20px',
    textAlign: 'center',
    fontFamily: themes.default.fontFamily,
    [mediaQueries.tablet]: {
      padding: '0'
    }
  },
  playgroundIntroText: {
    fontSize: '12pt',
    fontFamily: themes.default.fontFamily
  },
  wizardButton: {
    color: '#F77260',
    border: 'none',
    borderRadius: '5px',
    padding: '20px',
    display: 'block',
    margin: '20px auto',
    fontFamily: themes.default.fontFamily,
    fontWeight: 'bold',
    fontSize: '16pt',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  logo: {
    width: '400px',
    maxWidth: '80%',
    margin: '40px',
    [mediaQueries.tablet]: {
      margin: '20px',
    }
  },
  blurred: {
    filter: 'blur(8px)',
    transition: 'filter 1s'
  },
  wizardOverlay: {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '9000'
  },
  about: {
    background: 'rgb(241, 235, 224)',
    padding: '40px'
  },
  aboutIcon: {
    marginTop: '-10px',
    marginRight: '5px'
  },
  aboutTitleSpan: {
    fontSize: '24pt',
    fontFamily: themes.default.fontFamily,
    fontWeight: '300',
    textTransform: 'uppercase'
  },
  playgroundBullets: {
    listStyle: 'disc',
    paddingLeft: '30px',
    paddingRight: '30px'
  },
  playgroundBullet: {
    marginBottom: '20px'
  },
  experimentsLabel: {
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(red, orange)',
    animation: 'experimentalLabel 1000ms linear 5'
  }

};
