import React, { Component } from 'react';
import Header from '../header/Header';
import NavigationBar from '../navigationBar/navigationBar';
import UserList from '../userList/userList';
import Chat from '../chat/chat';
import InputBox from '../inputBox/inputBox';
import style from './messenger.module.css';
import { connect } from 'react-redux';

import { sendNameToServer } from '../../redux/socket';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: false
    };
  }

  setView(show) {
    this.setState({ showChat: show });
  }

  handleOnSubmit(text) {
    sendNameToServer(text);
  }

  render() {
    const { showChat } = this.state;
    const { nameAssigned, users } = this.props;
    if (!nameAssigned) {
      return (
        <div className={style.container}>
          <InputBox
            onSubmit={data => this.handleOnSubmit(data)}
            defaultValue="Enter Your Username"
          />
        </div>
      );
    } else {
      return (
        <div className={style.container}>
          <Header title="Status Meeting Standup" />
          <NavigationBar
            count={users.length}
            changeView={data => this.setView(data)}
          />
          {showChat ? <Chat /> : <UserList />}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  nameAssigned: state.nameAssigned,
  users: state.users
});

Messenger.propTypes = {};

export default connect(mapStateToProps)(Messenger);
