import React, {Component} from 'react';
import {Layout, Header, Navigation} from 'react-mdl';

class HeaderNav extends Component {

  render() {
    const styles = this.props.styles || defaultStyles;

    return <Layout fixedHeader style={styles.headerLayout}>
            <Header title={<span><strong>Coral Playground</strong></span>} style={styles.header}>
                <Navigation>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                </Navigation>
            </Header>
        </Layout>;
  }
}

export default HeaderNav;

const defaultStyles = {
  headerLayout: {
    height: 64,
    position:'relative'
  },
  header: {
    background: 'rgba(247,114,96,1)'
  }
};
