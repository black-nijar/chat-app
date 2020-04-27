const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Connect and Disconnect user
io.on('connection', (socket) => {
  console.log('we have a new connection!!!');

  // Get data from client
  socket.on('join', ({name, room}) => {
    console.log(name, room)
  })
  // Disconnect
  socket.on('disconnect', () => {
    console.log('user had left')
  })
})
app.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log(`server is running on ${PORT}`))