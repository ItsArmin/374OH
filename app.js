var mongoose = require('mongoose');
var path = require('path')
var express = require("express");
var app = express();


//	load static files
app.use('/javascripts',express.static(__dirname + '/public/javascripts'));
app.use('/partials',express.static(__dirname + '/public/partials'));
app.use('/css',express.static(__dirname + '/public/css'));


//	load up the api
var questionApi = require(__dirname + /api/questions.js);
//	use api in app
app.use('/api',questionApi);


//	Custom View engine with angular routing
app.get('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile(path.join('public','partials','base.html'), { root: __dirname });
});

//	stole this from the auto generated express
//	small bit of error handeling
app.use(function(req,res,next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.listen(8080);
console.log("listening on 8080");
module.exports = app;