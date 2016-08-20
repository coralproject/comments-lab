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
    this.props.dispatch(togglerFromURL(document.location.hash.slice(1)));
  }

  setURL() {
    let togglerObj = {};
    for (let group in this.props.togglerGroups) {
      let toggleGroup = this.props.togglerGroups[group];
      for (let toggle in toggleGroup.togglers) {
        if(toggleGroup.togglers[toggle].status) {
          togglerObj[toggle]=toggleGroup.togglers[toggle].status;
        }
      }
    }
    console.log("Setting url:" + encodeURIComponent(JSON.stringify(togglerObj)));
    document.location.hash = encodeURIComponent(JSON.stringify(togglerObj));
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
                        setURL={this.setURL}
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
