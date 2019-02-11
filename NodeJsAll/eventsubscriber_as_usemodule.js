// Subscriber code

var r = require("./eventspublisher_as_Module");

var results = r.emitMessages();   // emitMessages is function in another js

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