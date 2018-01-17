var socket = io();
socket.on('connect', function (){
    console.log("Connected to server");
   
});
socket.on('newMessage', function(data){
    console.log('New message received', data);
})
socket.on('disconnect', function(){
    console.log("Disconnected to server");
});
