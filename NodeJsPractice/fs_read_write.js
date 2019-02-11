var fs = require("fs");

var read = fs.readFileSync("Test.txt", "utf8");   /*reads file synchoronsly*/

console.log(read);

var write = fs.writeFileSync("Test1.txt", read);    /*writes file synchoronsly*/

var read1 = fs.readFile("Test.txt","utf8",function(err,data)    /*reads file asynchronous*/
{
	if(err)
	{
		return console.error(err);
	}
	else
	{
		console.log(data);
	}
});

console.log("I am first since Testing asynchronous ");