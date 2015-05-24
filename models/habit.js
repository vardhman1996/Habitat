var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var HabitSchema = new Schema({
	name: {type: String, required: true},
	days: {type: Number, required: true},
	startDate : {type: Date, default: Date.now, required: true},
	daysCompleted: {type: Number, default: 0, required: true},
	points: {type: Number, default: 0, required:true}
});

module.exports = mongoose.model('Habit', HabitSchema);