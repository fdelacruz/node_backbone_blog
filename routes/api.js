var express = require('express');
var router = express.Router();

// base url: '/api'
router.get('/', function(req, res) {
	res.send([{
		title: 'Hello World',
		content: 'My Content',
		posted: 'now'
	}]);
});

module.exports = router;
