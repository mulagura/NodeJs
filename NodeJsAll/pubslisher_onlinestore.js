// Publisher code

var eventEmitter = require("events").EventEmitter;   //events is module, EventEmitter is class in that 

var onlineStore = function()
{
	var time = 6000;
	var goodies = new eventEmitter();   //creating msgEmitter obj with new keyword
	setInterval(function()              //set interval for evry hour
	{

		//goodies.emit("scratchcard");        // obj.function
		goodies.emit("cash",1000);    // ("event","[arg1],[arg2],...")
		goodies.emit("food",100);


	},3000);    //for every hour
	
if (time == 6000)
{
	clearInterval(goodies);
	}
clearInterval(goodies);

	return goodies;
};

module.exports.onlineStore = onlineStore;
