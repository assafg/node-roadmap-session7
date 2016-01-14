var MongoClient = require('mongodb').MongoClient;

var col;
function connect(callback){
  MongoClient.connect('mongodb://192.168.33.10:27017/test', function(err, db) {
    if (err) {
      return callback(err);
    }
    col = db.collection('test_insert');
    callback();
  });
}

var insertSomething = function(obj, callback){
  if(!col){
    return connect((err) => {
      if(err){
        return callback(err);
      }
      insertSomething(obj, callback);
    });
  }

  col.insert(obj, callback);
}

exports.insertSomething = insertSomething;
