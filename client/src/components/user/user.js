import React from 'react';
import style from './user.module.css';

class User extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className={style.container}>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default User;
