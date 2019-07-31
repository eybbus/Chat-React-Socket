import React, { Component } from 'react';
import style from './inputBox.module.css';

import PropTypes from 'prop-types';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    event.preventDefault();

    if (inputValue === '') return;

    onSubmit(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { defaultValue } = this.props;
    const { inputValue } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)} className={style.container}>
        <label>
          <input
            autoFocus={true}
            className={style.input}
            type="text"
            value={inputValue}
            onChange={e => this.handleChange(e)}
            placeholder={defaultValue}
          />
        </label>
      </form>
    );
  }
}

InputBox.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default InputBox;
