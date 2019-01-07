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
        <CardTitle className='heroCardTitle' style={styles.heroCardTitle}>ARCHIVED - The Comments Lab (2016)</CardTitle>
        <CardText className='heroCardText' style={styles.heroCardText}>
          <div style={ styles.playgroundDescription }>
            We created this page in 2016 as an interactive way to share our research, during the early development stage of our open-source community platform <a href="https://coralproject.net/talk">Talk</a>. This is an artifact of our research, and does not represent the current feature set of Talk. We no longer update this page. To learn more about Talk, contact us at <a href="mailto:support@coralproject.net">support@coralproject.net</a>.
            <br /><br />
            <ul style={ styles.playgroundBullets }>
              <li style={ styles.playgroundBullet }><strong>Click on the names</strong> to reveal features. Switch them on and off to see how the comment box changes. Share your prefered comment settings with others by sharing the URL of your page.</li>
              <li style={ styles.playgroundBullet }><strong>Click on the <Icon name="info_outline" style={styles.infoIcon}/> buttons</strong> to read research and links about each feature.</li>
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
    width: '90%',
    minHeight: 0
  },
  playgroundBullet: {
    marginLeft:20,
    marginTop:5,
    marginBottom:10
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
