var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/nodetest1';

var findUsers = function(db, callback) {
   var cursor =db.collection('usercollection').find( );
   cursor.each(function(err, doc) {
      if (doc != null) {
         console.log(doc);
      } else {
         callback();
      }
   });
};


MongoClient.connect(url, function(err, db) {
  findUsers(db, function() {
      db.close();
  });
});

