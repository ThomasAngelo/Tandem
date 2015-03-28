var TandemApp = angular.module('TandemApp', ['ngRoute']);

TandemApp.config(function($routeProvider)
{
	$routeProvider
		.when('/login',
		{
			templateUrl: 'app/pages/login.html',
			controller: 'loginController'
		});
});

TandemApp.controller('loginController', ['$scope',
	function($scope)
	{
		$scope.test = "login";
	}
	]);