import React, { Component } from 'react';
import Header from '../header/Header';
import NavigationBar from '../navigationBar/navigationBar';
import UserList from '../userList/userList';
import style from './messenger.module.css';
import { connect } from 'react-redux';

import { sendNameToServer } from '../../redux/socket';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: false,
      userName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setView() {
    this.setState(prevState => ({
      showChat: !prevState.showChat
    }));
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleSubmit(event) {
    sendNameToServer(this.state.userName);
    event.preventDefault();
  }

  render() {
    const { showChat, inputValue } = this.state;
    const { nameAssigned } = this.props;
    if (!nameAssigned) {
      return (
        <div className={style.container}>
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
      );
    } else {
      return (
        <div className={style.container}>
          <Header title="Status Meeting Standup" />
          <NavigationBar changeView={() => this.setView()} />
          {showChat ? '' : <UserList />}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  nameAssigned: state.nameAssigned
});

Messenger.propTypes = {};

export default connect(mapStateToProps)(Messenger);
