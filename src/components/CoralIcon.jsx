import React, {PropTypes} from 'react';
import Radium from 'radium';
import _ from 'lodash';

@Radium
class CoralIcon extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  getColorProps(color, isInverse) {

    if (isInverse) {
      return { backgroundColor: color, color: 'white' };
    } else {
      return { color: color };
    }
  }

  render() {
    var g = _.find(icons, {name: this.props.name}).glyph || icons[0].glyph;;
    return (
      <span style={[
        this.props.style,
        styles.base,
        this.props.size === 'small' && styles.small,
        this.props.size === 'medium' && styles.medium,
        this.props.size === 'large' && styles.large,
        this.getColorProps(this.props.color, this.props.inverse)
      ]}>{g}</span>
    );
  }
}

const styles = {
  base: {
    display: 'inline-block',
    textAlign: 'center',
    fontFamily: 'coral-icon-font',
    width: '30px',
    margin: '0 4px 0 0',
    textIndent: '-8px'
  },
  small: {
  },
  medium: {
  },
  large: {
  },
  leftIcon: {
    paddingLeft: 20
  }
};

// Hex 61 = 'a', 62 = 'b', etc.
var icons = [
  { name: "author", glyph: "\u0061" },
  { name: "favorite", glyph: "\u0062" },
  { name: "liked", glyph: "\u0063" },
  { name: "moderator", glyph: "\u0064" },
  { name: "poweruser", glyph: "\u0065" },
];

export default CoralIcon;
