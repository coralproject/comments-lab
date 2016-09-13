// Framework tools
import React from 'react';
import Radium from 'radium';

// Playground-specific imports
import HeaderNav from 'components/layout/HeaderNav';
import FooterNav from 'components/layout/FooterNav';
import InfoModal from 'components/layout/InfoModal';
import Snackbar from 'components/layout/Snackbar';
import CustomizerSettings from 'components/playground/CustomizerSettings';
import Preview from 'components/playground/Preview';
import WelcomeHero from 'components/playground/WelcomeHero';

import DocumentTitle from 'react-document-title';

import { themes as themes, mediaQueries as mediaQueries } from 'playgroundSettings';

// Playground CSS
require('../../css/playground.css');
require('../../fonts/playground/coral-icon-font.css');

@Radium
class Playground extends React.Component {

  render() {

    return (
      <DocumentTitle title="The Coral Project - Comments Lab">
        <div>

          <div style={styles.playgroundContainer}>
            <HeaderNav />
            <WelcomeHero />
            <CustomizerSettings />

            <Preview />

          </div>
          <FooterNav />
          <InfoModal />
          <Snackbar />
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
    background:'white',
    [mediaQueries.tablet]: {
      position: 'relative',
      height: 'auto',
      overflowY: 'auto'
    }
  }
};
