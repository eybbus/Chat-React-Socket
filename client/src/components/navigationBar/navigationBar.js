import React from 'react';
import style from './navigationBar.module.css';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  handleClick(selected) {
    this.setState({ toggle: selected });
    this.props.changeView();
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className={style.container}>
        <div
          className={`${style.nav_item} ${!toggle ? '' : style.selected}`}
          onClick={() => this.handleClick(true)}
        >
          <h1>Participants</h1>
        </div>
        <div
          className={`${style.nav_item} ${toggle ? '' : style.selected}`}
          onClick={() => this.handleClick(false)}
        >
          <h1>Chat</h1>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  changeView: PropTypes.func.isRequired
};

export default NavigationBar;
