var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//	schema for the questions
var questionSchema = new Schema({
	topic	 : String,
	question : String,
	rank	 : Number,
	date	 : Date,
	status	 : Boolean
});

module.exports = mongoose.model('Question', questionSchema);