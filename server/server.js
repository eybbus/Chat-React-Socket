const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const shortid = require('shortid');

const port = 3001;

const users = [];

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
  });

  socket.on('message', msg => {
    let message = {
      _id: shortid.generate(),
      clientID: socket.id,
      timeSent: Date.now(),
      content: msg
    };
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log(`user: ${user.name} disconnected`);
    var index = users.findIndex(item => (item.id = user.id));
    users.splice(index, 1);
    io.emit('userUpdate', users);
  });
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
