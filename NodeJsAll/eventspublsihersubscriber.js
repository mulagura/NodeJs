// Publisher code

var eventEmitter = require("events").EventEmitter;   //events is module, EventEmitter is class in that 

var emitMessages = function()
{
	var msgEmitter = new eventEmitter();   //creating msgEmitter obj with new keyword
	setTimeout(function()
	{
		msgEmitter.emit("begin");        // obj.function
		msgEmitter.emit("merge","nodejs");    // ("event","[arg1],[arg2],...")
		msgEmitter.emit("merge","expressJs");
		msgEmitter.emit("end",2);

	},5000);

	return msgEmitter;
};

// Subscriber code

var results = emitMessages();   // emitMessages is function above

console.log("Lets start");

results.on("begin",function()
{
  console.log("he hey begins");
});

results.on("merge",function(msg)
{
  console.log("Received :"+msg);
});

results.on("end",function(num)
{
  console.log("Received :"+num);
  console.log("Ends here !!");
});