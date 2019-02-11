var http = require("http");
var MongoClient = require("mongodb").MongoClient;

//create a http server
http.createServer(function(req,res)
{
  res.writeHead(200,{'content-type':'text/plain'});
  res.write("CRUD operations in mongodb");
  res.end();
}).listen(1234);

//create connection with mongodb
var url = "mongodb://localhost/ram";
MongoClient.connect(url,function(err,db)
{
  if (err) console.error(err);
  console.log("Connected with mongodb");

  //create
      db.collection('curd').insert({name:"Mulagura"},function(err,insert)
        {
          if (err) console.error(err);
          else {
            console.log("Inserted data is:",insert);
              db.close();
          }
        });
  //read
      var search = {name:"Mulagura"};
      db.collection('curd').find(search).toArray(function(err,read)
      {
        if (err) console.error(err);
        else {
          console.log("data read is:",read);
            db.close();
        }
      });
  //update
  db.collection('curd').update({$set:{name:" Ram Mulagura"}},function(err,updated)
    {
      if (err) console.error(err);
      else {
        console.log("updated data is:",updated);
          db.close();
      }
    });

  //delete

    db.collection('curd').remove(function(err, del){
      if (err) console.error(err);
      else {
        console.log("deleted data is:",del);
          db.close();
      }
    });

});
