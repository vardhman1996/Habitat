var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	facebook         : {
        id           : String,
        token        : String,
        name         : String
    },
	age: {type: Number  },
	weight: {type: Number },
	height: {type: Number }
});

// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);