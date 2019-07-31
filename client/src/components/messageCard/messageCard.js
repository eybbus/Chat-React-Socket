import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './messageCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
  }

  toggleList() {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions
    }));
  }

  renderOptions() {
    if (this.state.showOptions) {
      return (
        <div className={style.menu}>
          <button>Remove</button>
          <button>Edit</button>
          <FontAwesomeIcon
            icon={faEllipsisH}
            onClick={() => this.toggleList()}
            className={style.button}
          />
        </div>
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faEllipsisH}
          onClick={() => this.toggleList()}
          className={style.button}
        />
      );
    }
  }

  render() {
    const { server, name, date, owner, message } = this.props;
    return (
      <div className={style.container}>
        <div className={style.info}>
          <h1>{name}</h1>
          <h2>{date}</h2>
          {owner ? this.renderOptions() : ''}
        </div>
        <p className={server ? style.bot : ''}>{message}</p>
      </div>
    );
  }
}

MessageCard.propTypes = {
  server: PropTypes.bool,
  name: PropTypes.string,
  date: PropTypes.string,
  owner: PropTypes.bool,
  message: PropTypes.string
};

export default MessageCard;
