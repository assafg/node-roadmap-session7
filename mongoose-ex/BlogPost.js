var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  {type: String, required:true},
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var BlogPost = mongoose.model('BlogPost', blogSchema);

module.exports = (post) => {
  return new BlogPost(post);
};