var app = angular.module('374OH',['ngRoute']);

	app.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when('/',{
				templateUrl:'/partials/home.html'
			})
		.when('/questions',{
				templateUrl:'/partials/questions.html'
			})
		.otherwise({
				template:"No page here..."
			});


		//	using html5 api to give nice url
		$locationProvider.html5Mode({
			enabled:true,
			requireBase:false
		});

	});

	// app.controller('questionController',function($scope){
	// 	$scope.message = "hello"
	// });	
//--------------------------------------------------------------------

	//	application directives


	// //	navigation bar directive
	// app.directive('navBar',function(){
	// 	return{
	// 		templateUrl : '/partials/navBar.html',
	// 		restrict : "E",
	// 		requireBase:false
	// 	}
	// });