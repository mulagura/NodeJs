//this program to insert a new record in mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/nodetest1';
var insertDocument = function(db, callback) 
{
	db.collection('usercollection').insert([{"username":"rob","email":"rob@gmail.com"}, {"username":"fred","email":"fred@gmail.com"}]
,function(err, result){
    console.log("Inserted a document into the usercollection collection.");
    callback();
  });

};
MongoClient.connect(url, function(err, db) {
   insertDocument(db, function() {
      db.close();
  });
});