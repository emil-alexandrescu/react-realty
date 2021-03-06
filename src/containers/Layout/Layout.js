import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.scss'; // eslint-disable-line
import Header from './components/Header';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.app}>
        <Helmet
          title="React Realty"
          meta={[{ property: 'og:site_name', content: 'React Realty' }]}
        />
        <Header />
        <div className={styles.content}>
          {children}
        </div>
      </div>
      );
  }
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
