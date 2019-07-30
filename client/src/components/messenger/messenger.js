import React, { Component } from 'react';
import Header from '../header/Header';
import NavigationBar from '../navigationBar/navigationBar';
import style from './messenger.module.css';

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

  render() {
    console.log(this.state);
    return (
      <div className={style.container}>
        <Header title="Status Meeting Standup" />
        <NavigationBar changeView={() => this.setView()} />
      </div>
    );
  }
}

Messenger.propTypes = {};

export default Messenger;
