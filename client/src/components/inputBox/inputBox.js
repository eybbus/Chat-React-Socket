import React, { Component } from 'react';
import { sendMessage } from '../../redux/socket';
import style from './inputBox.module.css';

import PropTypes from 'prop-types';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {
    sendMessage(this.state.inputValue, this.props.clientName);
    event.preventDefault();
    this.setState({ inputValue: '' });
  }

  render() {
    const { defaultValue } = this.props;
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={style.container}>
        <label>
          <input
            className={style.input}
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder={defaultValue}
          />
        </label>
      </form>
    );
  }
}

InputBox.propTypes = {
  clientName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string
};

export default InputBox;
