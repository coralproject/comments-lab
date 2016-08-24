// Framework tools
import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

// Playground-specific imports
import Sidebar from 'components/playground/Sidebar';
import HeaderNav from 'components/layout/HeaderNav';
import FooterNav from 'components/layout/FooterNav';
import InfoModal from 'components/layout/InfoModal';
import CustomizerSettings from 'components/playground/CustomizerSettings';
import Preview from 'components/playground/Preview';

import DocumentTitle from 'react-document-title';

import { themes as themes, mediaQueries as mediaQueries } from 'playgroundSettings';

// Playground CSS
require('../../css/playground.css');
require('../../fonts/playground/coral-icon-font.css');

@Radium
class Playground extends React.Component {

  render() {

    return (
      <DocumentTitle title="Coral Playground">
        <div>

          <div style={styles.playgroundContainer}>
            <HeaderNav />
            <CustomizerSettings />

            <Preview />

          </div>
          <FooterNav />
          <InfoModal />
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
