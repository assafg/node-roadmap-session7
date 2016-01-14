var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// create a new blog post and store it
const BlogPost = require('./BlogPost');

const p = {
  title:  'Hello Post',
  author: 'Assaf',
  body:   'This is a post body',
  comments: [{ body: 'I like your post', date: new Date() }],
  hidden: false
};
const p2 = {
  author: 'Assaf',
  body:   'This is a post body',
  comments: [{ body: 'I like your post', date: new Date() }],
  hidden: false
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var post = BlogPost(p);

  post.save((err) => {
    if(err){
      console.error(err);
    }
    console.log(post);

  });

  var post2 = BlogPost(p2);
  post2.save((err) => {
    if(err){
      console.error(err);
    }
    console.log(post2);

  });

});
