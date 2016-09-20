var express = require('express');
var router = express.Router();


//	load question schema
var question = require('../models/questionModel.js');



router.post('/askQuestion', function(req,res){
	var inQuestion = req.body;
	//	create new question object and put in the db
	var saveQuestion = new question{
			question : inQuestion.question,
			rank	 : inQuestion.rank,
			date	 : Date(),
			status	 : inQuestion.answered
	}
	saveQuestion.save();
	res.send(saveQuestion);

});

module.exports = router;