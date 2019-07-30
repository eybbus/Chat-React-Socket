import React from 'react';
import style from './navigationBar.module.css';
import NavButton from '../navButton/navButton';

import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userListSelected: true
    };
  }

  handleClick(selected) {
    this.setState({ userListSelected: selected });
  }

  render() {
    const { userListSelected } = this.state;
    return (
      <div className={style.container}>
        <div
          className={`${style.nav_item} ${
            !userListSelected ? '' : style.selected
          }`}
          onClick={() => this.handleClick(true)}
        >
          <h1>Participants</h1>
        </div>
        <div
          className={`${style.nav_item} ${
            userListSelected ? '' : style.selected
          }`}
          onClick={() => this.handleClick(false)}
        >
          <h1>Chat</h1>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {};

export default NavigationBar;
