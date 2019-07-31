import React from 'react';
import { connect } from 'react-redux';
import MessageCard from '../messageCard/messageCard';
import InputBox from '../inputBox/inputBox';

import style from './chat.module.css';

class Chat extends React.Component {
  render() {
    const messagelist = this.props.messages.map(el => (
      <MessageCard
        key={el._id}
        id={el._id}
        server={el.clientID === 'server' ? true : false}
        name={el.clientName}
        date={el.timeSent}
        owner={this.props.client.id === el.clientID ? true : false}
        message={el.content}
      />
    ));

    return (
      <div className={style.container}>
        <div className={style.messages}>{messagelist}</div>
        <div className={style.footer}>
          <InputBox
            clientName={this.props.client.name}
            defaultValue="Message"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  client: state.client
});

export default connect(mapStateToProps)(Chat);
