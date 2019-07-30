import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.container}>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

Header.defaultProps = {
  title: 'Title'
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
