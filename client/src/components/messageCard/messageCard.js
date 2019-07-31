import React from 'react';
import PropTypes from 'prop-types';
import style from './messageCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { editMessage, deleteMessage } from '../../redux/socket';

class MessageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      editingMessage: false
    };
  }

  toggleList() {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions
    }));
  }

  handleEditClick() {}

  handleDeleteClick() {
    const { id } = this.props;
    deleteMessage(id);
  }

  renderOptions() {
    if (this.state.showOptions) {
      return (
        <div className={style.menu}>
          <button onClick={() => this.handleDeleteClick()}>Remove</button>
          <button onClick={() => this.handleEditClick()}>Edit</button>
          <FontAwesomeIcon
            icon={faEllipsisH}
            onClick={() => this.toggleList()}
            className={style.show}
          />
        </div>
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faEllipsisH}
          onClick={() => this.toggleList()}
          className={style.show}
        />
      );
    }
  }

  renderText() {
    const { server, message } = this.props;
    if (server) {
      return <p className={style.bot}>{message}</p>;
    } else if (message.length === 0) {
      return <p className={style.bot}>Message Deleted.</p>;
    }

    return <p>{message}</p>;
  }

  render() {
    const { message, name, date, owner } = this.props;
    return (
      <div className={style.container}>
        <div className={style.info}>
          <h1>{name}</h1>
          <h2>{date}</h2>
          {owner && message.length !== 0 ? this.renderOptions() : ''}
        </div>
        {this.renderText()}
      </div>
    );
  }
}

MessageCard.propTypes = {
  id: PropTypes.string,
  server: PropTypes.bool,
  name: PropTypes.string,
  date: PropTypes.string,
  owner: PropTypes.bool,
  message: PropTypes.string
};

export default MessageCard;
