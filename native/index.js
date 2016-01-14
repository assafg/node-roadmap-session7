var basicInsert = require('./basic-insert.js');

var foo = {
  name: 'john',
  age: 35
};

basicInsert.insertSomething(foo, (err, docs) => {
  if(err){
    return console.error(err);
  }
  console.log(docs);
  console.log(foo);

});
