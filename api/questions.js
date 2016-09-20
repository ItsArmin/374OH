var express = require('express');
var router = express.Router();


//	load question schema
var questionMod = require('../models/questionModel.js');

router.get('/loadQuestions', function(req,res){
	questionMod.find({}).sort({rank: -1}).exec(function(err, results){
		if(results != NULL){
			res.send(req.body);
		}
		else{
			res.send(results);
		}
	});
});

router.post('/upVoteQuestion', function(req,res){

});

router.post('/downVoteQuestion', function(req,res){
	
});

router.post('/askQuestion', function(req,res){
	var q = req.body;
	//	create new question object and put in the db
	var saveQuestion = new questionMod({
			topic	 : q.topic,
			question : q.question,
			rank	 : 0,
			date	 : Date(),
			status	 : false
	});
	saveQuestion.save();
	res.send(saveQuestion);

});

module.exports = router;