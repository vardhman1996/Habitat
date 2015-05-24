var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.route('/')
	.get(function(req, res) {
		User.find(function(err, users){
			if(err) res.send(err);
			res.json(users);
		});
	})
	.post(function(req, res) {
		var user = new User();
		user.fname = req.body.fname;
		user.lname = req.body.lname;
		user.age = req.body.age;
		user.weight = req.body.weight;
		user.height = req.body.height;
		user.save(function(err){
			if(err) res.send(err);
			res.json(user);
		});
	});

router.put('/:uid/', function(req,res) {
	User.findById(req.params.uid, function(err, user){
		if(err) res.send(err);
		user.weight = req.body.weight || user.weight;
		user.height = req.body.height || user.height;
		user.save(function(err) {
			if(err) res.send(err);
			res.json(user);
		});
	});
});


module.exports = router;
