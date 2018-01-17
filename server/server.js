const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join( __dirname, '../public');
const port = process.env.PORT ;



var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    console.log('New User Connected');
   
    socket.on('createMessage',(data)=>{
        console.log('CreateMessage', data);
        io.emit('newMessage', {
            text : data.text,
            from : data.from,
            time : new Date().getTime()
        });
    })
    
    socket.on(('disconnect'),()=>{
        console.log('Client disconnected');
    });
});
server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
});