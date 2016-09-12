import React from 'react';
import Radium from 'radium';

import { setToggler, setTopic} from 'playground/PlaygroundActions';

import {themes} from 'playgroundSettings';

import {Grid, Cell, Switch,Icon} from 'react-mdl';

@Radium
class CustomizerToggle extends React.Component {

  onTogglerClick(e) {
    e.preventDefault();
    let currentStatus = this.props.toggler.status;
    let action = currentStatus ? this.props.toggler.offFunction : this.props.toggler.onFunction;
    if (action) {
      // Iterate through if action is an array.
      if (action.length) {
        for (var i = 0; i < action.length; i++) {
          this.props.dispatch(action[i]);
        }
      } 
      // just dispatch if action is an object
      else {
        this.props.dispatch(action);
      }
    }
    this.props.dispatch(setToggler(this.props.groupIndex, this.props.togglerIndex, !currentStatus));
    this.setState({ active: !currentStatus });
    this.props.setURL(this.props.togglerIndex, !currentStatus);
  }

  onInfoClick() {
    this.props.dispatch(setTopic(this.props.toggler.topic));
  }

  render() {
    const hasToggle = this.props.topics[this.props.toggler.topic] != undefined;
    return (
        <div>
          <Grid style={styles.togglerGrid}>
            <Cell col={10}>
              <div 
                style={[styles.descriptionSpan, hasToggle?styles.clickable:null]}
                onClick={this.onInfoClick.bind(this)}>
                { this.props.toggler.status ? this.props.toggler.label : this.props.toggler.offLabel }
                { hasToggle && <Icon style={styles.infoIcon} name="info_outline"/>}
              </div>
           </Cell>
           <Cell col={2}>
             <Switch ripple checked={this.props.toggler.status } onChange={this.onTogglerClick.bind(this)} />
           </Cell>
          </Grid>
          <Grid style={styles.togglerGrid}>
            <Cell col={12}>
              <p style={ styles.description }>
                { this.props.toggler.description }
              </p>
            </Cell>
          </Grid>
        </div>
    );

  }
}

// same as the @connect decorator above
export default CustomizerToggle;

var styles = {
  togglerGrid:{
    padding:0
  },
  base: {
    padding: '20px 40px',
    borderBottom: '1px solid #999',
    borderTop: '1px solid #999',
    marginTop: '-1px',
    minHeight: '100px',
    width: '100%',
    transition: 'background .5s',
    cursor: 'pointer',
    backgroundColor: 'rgba(255,255,255,.35)'
  },
  active: {
    backgroundColor: 'white'
  },
  label: {
    display: 'block',
    width: '80px',
    height: '30px',
    borderRadius: '15px',
    marginBottom: '10px',
    border: '1px solid #aaa',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer'
  },
  descriptionSpan: {
    fontWeight: 'bold',
    fontFamily: themes.default.fontFamily,
    fontSize: '14px',
    lineHeight: '30px'
  },
  clickable: {
    cursor:'pointer'
  },
  description: {
    color: '#666',
    fontFamily: themes.default.fontFamily,
    fontSize: '14px'
  },
  checkbox: {
    display: 'none'
  },
  switchExtra: {
    'float': 'left',
    margin: '0 10px 0 0',
    fontFamily: themes.default.fontFamily
  },
  infoIcon: {
    fontSize:16,
    opacity:.75,
    marginLeft:5
  }
};
