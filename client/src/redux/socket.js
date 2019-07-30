import io from 'socket.io-client';

const socket = io('http://localhost:3001/');

const configureSocket = dispatch => {
  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('userUpdate', users => {
    dispatch({ type: 'USERS_UPDATE', users: users });
  });

  socket.on('userCreated', client => {
    dispatch({ type: 'CLIENT_CREATED', client: client });
  });

  return socket;
};

export const sendNameToServer = name => {
  socket.emit('userName', name);
};

export default configureSocket;
