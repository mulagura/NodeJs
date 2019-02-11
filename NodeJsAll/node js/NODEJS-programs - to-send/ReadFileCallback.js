var fs=require("fs");
fs.readFile("Details.txt",function(err,content){
	if(err)
	   return console.error(err);
console.log(content.toString());
});
console.log("Proceeding to other db steps");

