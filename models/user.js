var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	fname: {type: String, required: true},
	lname: {type:String, required: true},
	age: {type: Number, required: true},
	weight: {type: Number, required: true},
	height: {type: Number, required: true}
});

module.exports = mongoose.model('User', UserSchema);