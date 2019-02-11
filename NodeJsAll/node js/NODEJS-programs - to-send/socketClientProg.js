<script src="/socket.io/socket.io.js"></script>
<script>
var socket=io.connect('http://localhost');
socket.on('msg-server',function(data){
	console.log(data);
	socket.emit('msg-client','hello from client....hurray');
});
</script>
