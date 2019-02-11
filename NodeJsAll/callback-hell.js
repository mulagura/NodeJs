var fs = require("fs");
var file = "somedata.txt";

fs.exists(file,function(exists)
{

	if(exists)
	{
		fs.stat(file,function(err,stat)
		{
			if(err)
			{
				console.log(err);
			}
			else(stat.isFile())
			
			{
				fs.readFile(file,"utf-8",function(err,data)
				{
					if(err)
			{
				console.log(err);
			}
			else
			{
				console.log(data);
			}
				});
			}
		});
	}
});