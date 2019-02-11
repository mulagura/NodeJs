var events = require("events");

var EventEmitter = new events.EventEmitter();

EventEmitter.on("clicks",function()
{
	console.log("on EventEmitter");
});

console.log("outside EventEmitter");

EventEmitter.emit("clicks");