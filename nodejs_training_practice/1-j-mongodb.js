var http = require("http");
//var mongo = require("mongodb");
var MongoClient = require("mongodb").MongoClient;

//creating server
http.createServer(function(req,res)
{
  res.writeHead(200,{'content-type':'text/plain'});
  res.write("ram Mulagura");
  res.end();
}).listen(1234);

//conncting to mongoclient
var url = "mongodb://localhost/ram";
MongoClient.connect(url,function(err,db)
{
  if (err) console.error(err);
  console.log("DB created,Hurray!");

      //query and print results in consle
      var search = {name:"Ram Mulagura"};
      db.collection('sample').find(search).toArray(function(err,result)
        {
          if (ernr) console.error(err);
          console.log(result);
          db.close();
    });

});
