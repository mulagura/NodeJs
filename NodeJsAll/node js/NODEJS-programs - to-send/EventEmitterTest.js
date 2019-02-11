var em=require("./EventEmitterModule");


var results=em.emitMessages();
//var results=emitMessages();

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

	

