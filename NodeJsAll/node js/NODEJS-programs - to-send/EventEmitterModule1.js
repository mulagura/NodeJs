var eventEmitter=require('events').EventEmitter;
var empdata={};
var joiningMessages=function() {
	var msgEmitter=new eventEmitter();
	setTimeout(function() {
		msgEmitter.emit('start');
		empdata.emailid='steve@abc.com';
		msgEmitter.emit('email-done');
		empdata.dept='Systems';
		msgEmitter.emit('dept-done');
		empdata.location='T9,2F,EC4';
		msgEmitter.emit('location-done');
		empdata.supervisor='roy@abc.com';
		msgEmitter.emit('supervisor-done');
		msgEmitter.emit('complete',empdata);
		
	},5000);
	return msgEmitter;
};

module.exports.joiningMessages=joiningMessages;

