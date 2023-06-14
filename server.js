const http = require('http');
const io = require('socket.io');

const apiServer = require('./api');
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }});

const PORT = 3000;
httpServer.listen(PORT);
console.log(`listening on port ${PORT}`);

const sockets = require('./sockets');
sockets.listen(socketServer);