import React from 'react';
import User from '../user/user';
import style from './userList.module.css';
import { connect } from 'react-redux';

class userList extends React.Component {
  render() {
    const users = this.props.users.map(el => (
      <User key={el.id} name={el.name} />
    ));
    return <div className={style.container}>{users}</div>;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(userList);
