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

module.exports.emitMessages=emitMessages;
