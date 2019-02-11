var http = require('http');
var options = {
	host: 'localhost',
	port: '9999'    
};
var str="";
var req=http.get(options,function(response) {
	
	response.on('data', function (chunk) {	
    str += chunk;
  });

  //one whole response is available
  response.on('end', function () {
    console.log(str);
  });

  response.on('error',function(msg) {
	  console.log("Error:"+msg);
  }); });





