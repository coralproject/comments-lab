import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import CustomizerToggle from './CustomizerToggle';
import {togglerFromURL} from '../../playground/PlaygroundActions';
import {themes} from 'playgroundSettings';
//import CustomizerSlider from './customizerSlider';

@connect(state => state.newPlayground)
@Radium
class CustomizerSettings extends React.Component {

  componentWillMount() {
    console.log("Retreiving URL:" + document.location.hash);
    let urlHash = document.location.hash.slice(1);
    this.props.dispatch(togglerFromURL(urlHash, this.props.togglerGroups));
    this.setPreviewFromUrl(urlHash);
  }

  setPreviewFromUrl(urlHash) {
    if (!urlHash) return
    let settings = JSON.parse(decodeURIComponent(urlHash));
    for (let group in this.props.togglerGroups) {
      let togglerGroup = this.props.togglerGroups[group];
      for (let toggle in togglerGroup.togglers) {
        if(settings[toggle]) {
          console.log("dispatching " + toggle);
          if(togglerGroup.togglers[toggle].onFunction) {
            this.props.dispatch(togglerGroup.togglers[toggle].onFunction);
          }
        }
      }
    }
  }

  setURL(toggler, status) {

    let settings = {};
    let urlHash = document.location.hash.slice(1);
    if (urlHash) {
      settings = JSON.parse(decodeURIComponent(urlHash));
    }
    if (status) {
      settings[toggler] = status;
    } else {
      delete settings[toggler];
    }

    if(Object.keys(settings).length > 0) {
      document.location.hash = encodeURIComponent(JSON.stringify(settings));
    } else {
      document.location.hash = '';
    }

  }

  render() {

    return (
      <div>
        {
          Object.keys(this.props.togglerGroups).map((togglerGroupIndex, gIndex) => {
            return (
              <div style={ styles.toggleGroup } key={ gIndex }>
                <h2 style={ styles.toggleGroupHeader }>{ this.props.togglerGroups[togglerGroupIndex].name }</h2>
                {
                  Object.keys(this.props.togglerGroups[togglerGroupIndex].togglers).map((togglerKey) => {
                    return (
                      <CustomizerToggle
                        groupIndex={ togglerGroupIndex }
                        togglerIndex={ togglerKey }
                        toggler={ this.props.togglerGroups[togglerGroupIndex].togglers[togglerKey] }
                        setURL={this.setURL.bind(this)}
                        dispatch={this.props.dispatch}
                        key={ togglerKey } />
                    );
                  })
                }
                <div style={ styles.clearBoth }></div>
              </div>
            );
          })
        }
        <div style={ styles.clearBoth }></div>
      </div>
      );
  }
}

// same as the @connect decorator above
export default CustomizerSettings;

var styles = {
  toggleGroup: {
    padding: '30px 0'
  },
  toggleGroupHeader: {
    fontSize: '11pt',
    color: '#999',
    textTransform: 'uppercase',
    fontFamily: themes.default.fontFamily,
    margin: '0 40px 20px 40px'
  },
  clearBoth: {
    'clear': 'both'
  }
};
