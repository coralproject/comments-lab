import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Card, CardText, CardTitle, Button} from 'react-mdl';
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
        <CardTitle className='heroCardTitle' style={styles.heroCardTitle}>Welcome to the Coral Playground</CardTitle>
        <CardText className='heroCardText' style={styles.heroCardText}>
          <div style={ styles.playgroundDescription }>
            This playground showcases the various elements you would usually find in commentary sections all over the web.
            <br />
            <ul style={ styles.playgroundBullets }>
              <li style={ styles.playgroundBullet }><strong>Use the controls</strong> to tweak the UI and explore how it affects the comment box and the stream. You can also try the features on the comment box and the stream itself.</li>
              <li style={ styles.playgroundBullet }><strong>Learn more about online comments</strong>, the issues they are facing, and the purpose and history of the features we see everyday on comment streams,
              through the expandable panel below.</li>
            <li style={ styles.playgroundBullet }><strong>Share your thoughts</strong> on the problems addressed by each solution.</li>
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
  }
};
