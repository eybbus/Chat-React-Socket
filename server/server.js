const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const shortid = require('shortid');

const port = 3001;

const users = [];

const botName = 'Meetingbot';

io.on('connection', socket => {
  console.log('A user has connected');
  let user = {
    id: '',
    name: ''
  };

  socket.on('userName', name => {
    user.id = socket.id;
    user.name = name;
    users.push(user);
    console.log(users);
    io.emit('userUpdate', users);
    socket.emit('userCreated', user);
    io.emit('joined');

    let time = _getTime();
    let message = {
      _id: shortid.generate(),
      clientID: 'server',
      clientName: botName,
      timeSent: time,
      content: `${user.name} joined.`
    };
    io.emit('message', message);
  });

  socket.on('message', data => {
    console.log('Sending Message');
    let time = _getTime();
    let message = {
      _id: shortid.generate(),
      clientID: socket.id,
      clientName: data.name,
      timeSent: time,
      content: data.msg
    };
    io.emit('message', message);
  });

  socket.on('deleteMessage', id => {
    console.log('deleting');
    io.emit('deleteMessage', id);
  });

  socket.on('editMessage', msg => {
    console.log('Editing');
    io.emit('updateMessage', msg);
  });

  socket.on('disconnect', () => {
    console.log(`user: ${user.name} disconnected`);
    var index = users.findIndex(item => (item.id = user.id));
    users.splice(index, 1);
    io.emit('userUpdate', users);

    let time = _getTime();
    let message = {
      _id: shortid.generate(),
      clientID: 'server',
      clientName: botName,
      timeSent: time,
      content: `${user.name} left.`
    };
    io.emit('message', message);
  });
});

const _getTime = () => {
  let today = new Date();
  return today.getHours() + ':' + today.getMinutes();
};

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
