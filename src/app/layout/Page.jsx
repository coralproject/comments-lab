/*

Page is not a smart component, but it holds all the other layout elements
and all the other smart components (containers)

*/
import React from 'react';
import Radium from 'radium';

import Header from 'app/layout/header/Header';
import Menu from 'app/layout/sidebar/Menu';

import settings from 'settings';

@Radium
class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    var mql = window.matchMedia('(min-width: 800px)');
    mql.addListener(this.mediaQueryChanged.bind(this));
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  componentDidMount() {
    setTimeout(function () {
      // I don't know why this needs to be on nextTick
      this.setState({shouldTransition: true});
    }.bind(this), 0);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {

    var sidebarContent = <Menu />;

    return (
      <div>
        <Header />
        <div style={[styles.wrapper, this.props.style]}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

// same as the @connect decorator above
export default Page;

const styles = {
  wrapper:  {
    backgroundColor: settings.bgColorBase,
    top: 50,
    right: 0,
    left: 0,
    bottom: 0,
    padding: 20,
    position: 'absolute'
  }
};
