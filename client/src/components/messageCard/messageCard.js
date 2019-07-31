import React from 'react';
import PropTypes from 'prop-types';
import style from './messageCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class MessageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      editingMessage: false,
      newMessage: this.props.message
    };
  }

  toggleOptions() {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions
    }));
  }

  toggleEdit() {
    this.setState(prevState => ({
      editingMessage: !prevState.editingMessage
    }));
  }

  handleChange(event) {
    this.setState({
      newMessage: event.target.value
    });
  }

  handleEditClick() {
    this.toggleEdit();
  }

  handleApplyClick() {
    const { onApply, id, message } = this.props;
    const { newMessage } = this.state;
    if (newMessage !== message) {
      onApply({ newMessage, id });
    }
    this.handleEditClick();
    this.toggleOptions();
  }

  handleDeleteClick() {
    const { onRemove, id } = this.props;
    onRemove(id);
  }

  renderOptions(owner, message) {
    // should be refactored
    if (!owner || message.length === 0) return;
    const { editingMessage } = this.state;
    if (this.state.showOptions) {
      let firstButton;
      let seccondButton;
      if (editingMessage) {
        firstButton = (
          <button onClick={() => this.handleApplyClick()}>Apply</button>
        );
        seccondButton = (
          <button onClick={() => this.handleEditClick()}>Cancel</button>
        );
      } else {
        firstButton = (
          <button onClick={() => this.handleEditClick()}>Edit</button>
        );
        seccondButton = (
          <button onClick={() => this.handleDeleteClick()}>Remove</button>
        );
      }
      return (
        <div className={style.menu}>
          {firstButton}
          {seccondButton}
          <FontAwesomeIcon
            icon={faEllipsisH}
            onClick={() => this.toggleOptions()}
            className={style.show}
          />
        </div>
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faEllipsisH}
          onClick={() => this.toggleOptions()}
          className={style.show}
        />
      );
    }
  }

  renderText() {
    const { server, message } = this.props;
    const { editingMessage, newMessage } = this.state;
    if (server) {
      return <p className={style.bot}>{message}</p>;
    } else if (message.length === 0) {
      return <p className={style.bot}>Message Deleted.</p>;
    }
    if (editingMessage) {
      return (
        <textarea onChange={e => this.handleChange(e)} value={newMessage} />
      );
    } else {
      return <p>{message}</p>;
    }
  }

  render() {
    const { editingMessage } = this.state;
    const { message, name, date, owner } = this.props;
    if (editingMessage) {
      return (
        <div className={style.container}>
          <div className={style.info}>
            <h1>{name}</h1>
            <h2>{date}</h2>
            {this.renderOptions(owner, message)}
          </div>
          {this.renderText()}
        </div>
      );
    } else {
      return (
        <div className={style.container}>
          <div className={style.info}>
            <h1>{name}</h1>
            <h2>{date}</h2>
            {this.renderOptions(owner, message)}
          </div>
          {this.renderText()}
        </div>
      );
    }
  }
}

MessageCard.propTypes = {
  id: PropTypes.string,
  server: PropTypes.bool,
  name: PropTypes.string,
  date: PropTypes.string,
  owner: PropTypes.bool,
  message: PropTypes.string,
  onApply: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default MessageCard;
