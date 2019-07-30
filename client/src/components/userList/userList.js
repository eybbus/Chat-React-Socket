import React from 'react';
import User from '../user/user';
import style from './userList.module.css';
import { connect } from 'react-redux';

class userList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          id: 1,
          name: 'Elon Musk'
        },
        {
          id: 2,
          name: 'Jeff Bezos'
        },
        {
          id: 3,
          name: 'JB Stroubel'
        },
        {
          id: 4,
          name: 'Reid Hoffman'
        }
      ]
    };
  }

  render() {
    const testUsers = this.state.names.map(el => (
      <User key={el.id} name={el.name} />
    ));
    console.log(this.props.users);

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
