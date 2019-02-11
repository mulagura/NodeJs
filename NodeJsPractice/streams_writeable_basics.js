var fs = require("fs");

var readStream = fs.createReadStream("sample.mp4","");

var writeStream = fs.createWriteStream("copy_sample.mp4","");    /*creates write stream with name of file*/

readStream.on("data",function(chunks)
{

	console.log("------------Reading--------");
	

	writeStream.write(chunks);            /*chunks are stored and written here*/

	console.log(chunks);


});

readStream.on("end",function(chunks)
{
		console.log("----------End---------")
});