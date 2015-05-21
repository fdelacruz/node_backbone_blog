var express = require('express');
var router = express.Router();
var Post = require('../models/post');

// base url: '/api'
router.get('/', function(req, res) {
	res.send([{
		title: 'Hello World',
		content: 'My Content',
		posted: 'now'
	}]);
});

router.post('/', function(req, res) {
	var newPost = new Post(req.body);	
	newPost.save(function(err, doc) {
		res.send(doc);
	});
});

module.exports = router;
