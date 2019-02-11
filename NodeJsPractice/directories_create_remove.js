var fs = require("fs");

fs.unlink("Test1.txt");  /* unlink method to remove file*/

fs.mkdir("Test");    /*mkdir to create a directory*/

fs.rmdir("Test");    /*rmdir to remove directory*/

fs.mkdirSync("Test", function()    /*create directory and write file inside it*/
{
	fs.writeFile("./Test/Text2.txt","Ram Mulagura","utf8");
});

fs.unlink("./Test/Text2.txt",function()    /*remove directory and unlink file*/
{
	fs.rmdir("Test");
})