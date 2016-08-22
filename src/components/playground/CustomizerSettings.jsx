import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import CustomizerToggle from './CustomizerToggle';
import {togglerFromURL, setTogglerGroup} from '../../playground/PlaygroundActions';
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

  onTogglerGroupClick(group) {
    return (e) => {
      e.preventDefault();
      if (this.props.selectedTogglerGroup == group) {
        this.props.dispatch(setTogglerGroup());        
      } else {
        this.props.dispatch(setTogglerGroup(group));
      }
    };
  }

  render() {

    return (
      <div>
        {
          Object.keys(this.props.togglerGroups).map((togglerGroupIndex) => {
            return (
              <Card shadow={1} style={styles.card}>
                <CardTitle style={styles.cardTitle}
                  onClick={this.onTogglerGroupClick(togglerGroupIndex).bind(this)}>
                  { this.props.togglerGroups[togglerGroupIndex].name }
                </CardTitle>
                {
                  this.props.selectedTogglerGroup == togglerGroupIndex && 
                  Object.keys(this.props.togglerGroups[togglerGroupIndex].togglers).map((togglerKey, tIndex) => {
                    return (
                      <CardText style={styles.cardText}>
                        {tIndex != 0 && <hr style={styles.line}/>}
                        <CustomizerToggle
                          groupIndex={ togglerGroupIndex }
                          togglerIndex={ togglerKey }
                          toggler={ this.props.togglerGroups[togglerGroupIndex].togglers[togglerKey] }
                          setURL={this.setURL.bind(this)}
                          dispatch={this.props.dispatch}
                          key={ togglerKey } />
                      </CardText>
                    );
                  })
                }
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
    margin:20,
    minHeight:0
  },
  cardText: {
    width:'100%',
    color:'black',
    paddingTop:5,
    paddingBottom:5
  },
  cardTitle: {
    color: 'white',
    background:'rgba(247,114,96,1)'
  },
  line: {
    margin:0
  }
};
