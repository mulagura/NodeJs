var events = require("events");

var eventEmitter = new events.EventEmitter();                /*EventEmitter class in events module*/

eventEmitter.on("clicks",function()                       /* listner and when emi fires it executes*/
{
	console.log("on listner EventEmitter");
});

console.log("outside EventEmitter");

eventEmitter.emit("clicks");                                 /*emit to fire the event*/

/*or*/

eventEmitter.on("clicks",function(data)
{
	console.log( data + " Got data ");
});

eventEmitter.emit("clicks","Ram");