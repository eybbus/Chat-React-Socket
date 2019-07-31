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

  socket.on('message', msg => {
    dispatch({ type: 'MESSAGE_RECEIVED', message: msg });
  });

  socket.on('deleteMessage', id => {
    dispatch({ type: 'DELETE_MESSAGE', messageID: id });
  });

  return socket;
};

export const sendNameToServer = name => {
  socket.emit('userName', name);
};

export const sendMessage = (msg, name) => {
  socket.emit('message', { msg, name });
};

export const deleteMessage = id => {
  socket.emit('deleteMessage', id);
};

export const editMessage = (msg, name) => {
  socket.emit('editMessage', { msg, name });
};

export default configureSocket;
