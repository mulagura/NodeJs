var fs = require("fs");

var readStream = fs.createReadStream("Test.txt","utf8");

/*or*/

readStream.setEncoding("utf8");  /*another way to set encoding type*/

var data ='';      /*variable to store data*/

readStream.on("data", function(chunks)                      /*data keyword to chunk the data*/
{
	console.log("--------------------------------------------");
	console.log(chunks);
	data = data + chunks;                /*to print the data*/
});

readStream.on("end", function(chunks)                        /* end here is to end the chunk */
{
	console.log("-------------------End-----------------------");
	/*console.log(Stringify(chunks);*/
		console.log(data);
		
		console.log(data);
});