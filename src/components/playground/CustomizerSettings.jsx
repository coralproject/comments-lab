import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import CustomizerToggle from './CustomizerToggle';
import {togglerFromURL} from '../../playground/PlaygroundActions';
import {themes} from 'playgroundSettings';
import {Card, CardTitle, CardText} from 'react-mdl';
//import CustomizerSlider from './customizerSlider';

@connect(state => state.newPlayground)
@Radium
class CustomizerSettings extends React.Component {

  componentWillMount() {
    console.log('Retreiving URL:' + document.location.hash);
    let urlHash = document.location.hash.slice(1);
    this.props.dispatch(togglerFromURL(urlHash, this.props.togglerGroups));
    this.setPreviewFromUrl(urlHash);
  }

  setPreviewFromUrl(urlHash) {
    if (!urlHash) return;
    let settings = JSON.parse(decodeURIComponent(urlHash));
    for (let group in this.props.togglerGroups) {
      let togglerGroup = this.props.togglerGroups[group];
      for (let toggle in togglerGroup.togglers) {
        if(settings[toggle]) {
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
              <Card shadow={1} style={styles.card}>
                <CardTitle>{ this.props.togglerGroups[togglerGroupIndex].name }</CardTitle>
                <CardText style={styles.cardText}>
                {
                  Object.keys(this.props.togglerGroups[togglerGroupIndex].togglers).map((togglerKey, tIndex) => {
                    return (
                      <div>
                        {tIndex != 0 && <hr/>}
                        <CustomizerToggle
                          groupIndex={ togglerGroupIndex }
                          togglerIndex={ togglerKey }
                          toggler={ this.props.togglerGroups[togglerGroupIndex].togglers[togglerKey] }
                          setURL={this.setURL.bind(this)}
                          dispatch={this.props.dispatch}
                          key={ togglerKey } />
                      </div>
                    );
                  })
                }
                </CardText>
              </Card>
            );
          })
        }
      </div>
      );
  }
}

// same as the @connect decorator above
export default CustomizerSettings;

var styles = {
  card: {
    width: '90%',
    margin:20
  },
  cardText: {
    width:'100%',
    color:'black'
  },
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
