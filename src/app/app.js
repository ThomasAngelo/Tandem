var TandemApp = angular.module('TandemApp', ['ngRoute']);

TandemApp.config(function($routeProvider)
{
	$routeProvider
		.when('/login',
		{
			templateUrl: 'app/pages/login.html',
			controller: 'loginController'
		})
		.when('/home',
		{
			templateUrl: 'app/pages/home.html',
			controller: 'homeController'
		});
});

TandemApp.controller('loginController', ['$scope',
	function($scope)
	{
		$scope.test = "login";
	}
	]);
	
TandemApp.controller('homeController', ['$scope',
	function($scope)
	{
		$scope.test = "home";
	}
	]);