var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var HabitSchema = new Schema({
	_id: {type: String, required: true },
	name: {type: String, required: true},
	days: {type: Integer, required: true},
	daysCompleted: {type: Integer, default: 0, required: true},
	points: {type: Integer, default: 0, required:true}
});

module.exports = mongoose.model('Habit', HabitSchema);