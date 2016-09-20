angular.module('374OH');

app.controller('questionController', function($scope, $http){
	$scope.message = "hello";

	$scope.postQuestion = function(question){
		$http.post('/api/askQuestion', question).then(function(response){
			
		},function(response){

		});
	};

});