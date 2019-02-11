var fs=require("fs");
var readstream=fs.createReadStream("largefile.txt",{encoding:'utf-8'});

var count=0;
function read() {
	var buffer;
	while(buffer=readstream.read()) {
		count++;
		console.log(">>>"+count+")Data>>"+buffer);
	}
}
readstream.on('readable',read);
readstream.on('error',function(msg){
	console.log('error occured'+msg);
});
readstream.on('end',function() {
	console.log('stream ended'+count+'chunk');
});

