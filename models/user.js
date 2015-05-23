var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	_id: {type: String, required: true },
	fname: {type: String, required: true},
	lname: {type:String, required: true},
	age: {type: Integer, required: true},
	weight: {type: Integer, required: true},
	height: {type: Integer, required: true}
});

module.exports = mongoose.model('User', UserSchema);