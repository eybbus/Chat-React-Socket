import React from 'react';
import style from './navigationBar.module.css';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  handleClick(selected) {
    const { changeView } = this.props;
    this.setState({ toggle: selected });
    changeView(selected);
  }

  render() {
    const { toggle } = this.state;
    const { count } = this.props;
    return (
      <div className={style.container}>
        <div
          className={`${style.nav_item} ${toggle ? '' : style.selected}`}
          onClick={() => this.handleClick(false)}
        >
          <h1>Participants ({count})</h1>
        </div>
        <div
          className={`${style.nav_item} ${!toggle ? '' : style.selected}`}
          onClick={() => this.handleClick(true)}
        >
          <h1>Chat</h1>
        </div>
      </div>
    );
  }
}

NavigationBar.defaultProps = {
  count: 0
};

NavigationBar.propTypes = {
  changeView: PropTypes.func.isRequired,
  count: PropTypes.number
};

export default NavigationBar;
