var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	title: String,
	content: String,
	posted: Date
});

var Post = mongoose.model('post', postSchema);
module.exports = Post;
