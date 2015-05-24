var express = require('express');
var router = express.Router();

var Habit = require('../models/habit');


router.route('/')
	.get(function(req, res) {
		console.log("In habits");
		Habit.find(function(err, habits) {
			if(err) res.send(err);
			res.json(habits);
		});
	})
	.post(function(req, res) {
		var habit = new Habit();
		habit.name = req.body.name;
		habit.days = req.body.days; 
		habit.save(function(err) {
			if(err) res.send(err);
			res.json(habit);
		});
	});

router.put('/:hid', function(req, res) {
	console.log('Checkkk!');
	Habit.findById(req.params.hid, function(err, habit){
		if(err) {
			res.send(err);
		}
		habit.name = req.body.name || habit.name;
		habit.days = req.body.days || habit.days;
		habit.save(function(err) {
			if(err) res.send(err);
			res.json(habit);
		});
	});
});

module.exports = router;