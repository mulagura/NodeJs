var fs = require("fs");
fs.readFile("hi.txt", function (err,content)
{
    if (err)
        return console.error(err);
    console.log(content.toString());
});
console.log("My name is");