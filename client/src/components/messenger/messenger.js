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

  setView() {
    this.setState(prevState => ({
      showChat: !prevState.showChat
    }));
  }

  handleOnSubmit(text) {
    sendNameToServer(text);
  }

  render() {
    const { showChat } = this.state;
    const { nameAssigned } = this.props;
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
          <NavigationBar changeView={() => this.setView()} />
          {showChat ? <Chat /> : <UserList />}
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
