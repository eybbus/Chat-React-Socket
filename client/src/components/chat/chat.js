import React from 'react';
import { connect } from 'react-redux';
import MessageCard from '../messageCard/messageCard';
import InputBox from '../inputBox/inputBox';
import { sendMessage, editMessage, deleteMessage } from '../../redux/socket';

import style from './chat.module.css';

class Chat extends React.Component {
  handleOnSubmit(text) {
    const { client } = this.props;
    sendMessage(text, client.name);
  }

  handleOnApply(msg) {
    editMessage(msg.newMessage, msg.id);
  }

  handleOnRemove(id) {
    deleteMessage(id);
  }

  render() {
    const { client, messages } = this.props;
    const messagelist = messages.map(el => (
      <MessageCard
        key={el._id}
        id={el._id}
        server={el.clientID === 'server' ? true : false}
        name={el.clientName}
        date={el.timeSent}
        owner={client.id === el.clientID ? true : false}
        message={el.content}
        onApply={data => this.handleOnApply(data)}
        onRemove={data => this.handleOnRemove(data)}
      />
    ));

    return (
      <div className={style.container}>
        <div className={style.messages}>{messagelist}</div>
        <div className={style.footer}>
          <InputBox
            defaultValue="Message"
            onSubmit={data => this.handleOnSubmit(data)}
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
