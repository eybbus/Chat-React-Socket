import React from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../../redux/socket';

import style from './chat.module.css';

class chat extends React.Component {
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
    sendMessage(this.state.inputValue);
    event.preventDefault();
    this.setState({ inputValue: '' });
  }

  render() {
    const messagelist = this.props.messages.map(el => <p>{el.content}</p>);
    const { inputValue } = this.state;
    return (
      <div className={style.container}>
        <div className={style.messages}>{messagelist}</div>
        <div>
          <form onSubmit={this.handleSubmit} className={style.formContainer}>
            <label>
              <input
                type="text"
                value={inputValue}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(chat);
