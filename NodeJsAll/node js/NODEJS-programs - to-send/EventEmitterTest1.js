var em=require("./EventEmitterModule1");


var results=em.joiningMessages();

console.log("Program Starts for HR team...")

results.on('complete',function(data)
{
	
	console.log("Joining formalities complete:"+"details are:"+data.emailid+" "+data.dept+" "+data.location+" "+data.supervisor);
});


	

