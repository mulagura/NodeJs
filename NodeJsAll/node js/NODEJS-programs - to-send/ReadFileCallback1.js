var fs=require("fs");
var handleread=function (){
fs.readFile("Details.txt",function(err,content){
	if(err)
	   return console.error(err);
	else
	   return content;
});
}
console.log(handleread);
console.log("Proceeding to other db steps");

