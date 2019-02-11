var fs = require("fs");

console.log("Hii");

fs.writeFile("somedata.txt","happy now !!",function(err)
{
	if(err)
		return console.error(err);
console.log("la la land");

});

/*fs.readFile("somedata.txt", function (err,content)
{
    if (err)
        return console.error(err);
    console.log(content.toString());
});
console.log("here comes");*/