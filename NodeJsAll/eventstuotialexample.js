var events = require("events");

var EventEmitter = events.EventEmitter;

var emitter =  new EventEmitter();

var uid = "mulaggura";
var pass = "qwerty";

emitter.on("Event1",function(id,pas)
{
	console.log(id);
});

emitter.on("Event1",function(id,pas)
{
	console.log(pass);
});

emitter.emit("Event1",uid,pass);

console.log(EventEmitter.listenerCount(emitter,"Event1"));