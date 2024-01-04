import http from 'http'
import { IOManager } from './managers/IoManager';

 
const server = require('http').createServer();
const IOManager= new IOManager(io);
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => {
    console.log((data))
  });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);