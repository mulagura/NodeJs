var eventEmitter=require('events').EventEmitter;
var emitMessages=function() {
	var msgEmitter=new eventEmitter();
	setTimeout(function() {
		msgEmitter.emit('begin');
		msgEmitter.emit('merge','node.js');
		msgEmitter.emit('merge','expr.js');
		msgEmitter.emit('end',2);
		
	},5000);
	return msgEmitter;
};



var results=emitMessages();

console.log("Program Starts......")

results.on('begin',function()
{
	console.log("Begin");
});
results.on('merge',function(msg)
{
	console.log("Received:"+msg);
});
results.on('end',function(num)
{
	console.log("Received:"+num);
	console.log("Program Ends......");

});

	


