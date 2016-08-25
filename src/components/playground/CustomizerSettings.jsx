import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import CustomizerToggle from './CustomizerToggle';
import {togglerFromURL, setTogglerGroup} from '../../playground/PlaygroundActions';
import {Card, CardText} from 'react-mdl';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
          let action = togglerGroup.togglers[toggle].onFunction;
          if(action && action.length) {
            for (var i = 0; i < action.length; i++) {
              this.props.dispatch(action[i]);
            }
          } else if (action) {
            this.props.dispatch(action);
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

    document.location.hash = encodeURIComponent(JSON.stringify(settings));
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
      <div id="customizer" style={styles.customizer}>
        <div style={styles.customizerScroll}>
        {
          Object.keys(this.props.togglerGroups).map((togglerGroupIndex, gIndex) => {
            return (
              <Card shadow={1} style={styles.card} key={gIndex}>
                <div style={styles.cardTitle}
                  onClick={this.onTogglerGroupClick(togglerGroupIndex).bind(this)}>
                  { this.props.togglerGroups[togglerGroupIndex].name }
                </div>
                <ReactCSSTransitionGroup
                  transitionName='togglerGroup'
                  transitionEnterTimeout={250}
                  transitionLeaveTimeout={250}>
                {
                    Object.keys(this.props.togglerGroups[togglerGroupIndex].togglers).map((togglerKey, tIndex) => {
                      if (this.props.selectedTogglerGroup != togglerGroupIndex) {
                        return null;
                      }
                      return (
                          <CardText style={styles.cardText} key={tIndex}>
                            {tIndex != 0 && <hr style={styles.line}/>}
                            <CustomizerToggle
                              groupIndex={ togglerGroupIndex }
                              togglerIndex={ togglerKey }
                              toggler={ this.props.togglerGroups[togglerGroupIndex].togglers[togglerKey] }
                              setURL={this.setURL.bind(this)}
                              dispatch={this.props.dispatch}
                              key={ togglerKey }
                              topics={this.props.topics}/>
                          </CardText>
                      );
                    })
                  }
              </ReactCSSTransitionGroup>
              </Card>
            );
          })
        }
        </div>
      </div>
      );
  }
}

// same as the @connect decorator above
export default CustomizerSettings;

var styles = {
  customizer: {
    background: 'white',
    display:'inline-block',
    verticalAlign:'top',
    width:'35%',
    overflow:'auto'
  },
  card: {
    width: '90%',
    margin:10,
    marginLeft:20,
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
    background:'#f36451',
    cursor:'pointer',
    fontSize:16,
    padding:16
  },
  line: {
    margin:0
  }
};
