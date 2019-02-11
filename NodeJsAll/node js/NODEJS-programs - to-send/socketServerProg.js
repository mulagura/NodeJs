var io=require("socket.io").listen(80);
io.on('connection',function(socket){	
	socket.emit('msg-server','hello from server');
	socket.on('msg-client',function(data){
		console.log(data);
	});
});