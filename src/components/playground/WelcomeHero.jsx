import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Card, CardText, CardTitle, Button, Icon} from 'react-mdl';
import {toggleWelcomeHero} from 'playground/PlaygroundActions';

@connect(
  (state) => {
    return {
      show: state.playground.showWelcome
    };
  },
  (dispatch) => {
    return {
      dispatch
    };
  }
)
class WelcomeHero extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    let welcome = this.props.show ?
      <Card className='heroCard' shadow={0} style={styles.heroCard}>
        <CardTitle className='heroCardTitle' style={styles.heroCardTitle}>Welcome to the Comments Lab</CardTitle>
        <CardText className='heroCardText' style={styles.heroCardText}>
          <div style={ styles.playgroundDescription }>
            This is a place to explore some of the different possible features of an online comment space. It will continue to grow and change as <a href="https://coralproject.net" target="_blank">The Coral Project</a> continues its work.
            <br /><br />
            <ul style={ styles.playgroundBullets }>
              <li style={ styles.playgroundBullet }><strong>Click on the names</strong> to reveal features. Switch them on and off to see how the comment box changes. Share your favorite comment settings by sharing the URL.</li>
              <li style={ styles.playgroundBullet }><strong>Click on the <Icon name="info_outline" style={styles.infoIcon}/> buttons</strong> to learn about why and how you might use each feature.</li>
            <li style={ styles.playgroundBullet }><strong>Add features</strong> by submitting updates to our <a href="https://github.com/coralproject/experiment-playground" target="_blank">GitHub</a>.</li>
            </ul>
          </div>
          <Button
            className='heroButton'
            style={styles.heroButton}
            onClick={()=>{this.props.dispatch(toggleWelcomeHero());}}
            ripple
            raised>
            Got it!
          </Button>
        </CardText>
      </Card>
      :null;
    return welcome;
  }
}

export default WelcomeHero;

const defaultStyles = {
  heroCard: {
    margin: 20,
    padding: 10,
    width: 'fit-content',
    minHeight: 0
  },
  playgroundBullet: {
    marginLeft:20,
    marginTop:5
  },
  heroButton: {
    float:'right'
  },
  infoIcon: {
    fontSize:16,
    opacity:.75,
    marginLeft:5,
    cursor: 'default'
  }
};
