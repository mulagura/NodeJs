var fs = require("fs");
var file = "somedata.txt";

fs.readFile(file,function(err,data){
	if(err)
	{
		console.log(err);
	}
	else
		console.log(data.toString());
});

/*or*/
