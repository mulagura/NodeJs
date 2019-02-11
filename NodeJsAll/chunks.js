var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('somedata.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   //data += chunk;
console.log(chunk);
});

readerStream.on('end',function(chunk){
   console.log(chunk);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");


var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('somedata.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");

var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");