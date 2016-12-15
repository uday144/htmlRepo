	// create the module and name it scotchApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'app/views/home.html',
				controller  : 'AppCtrl'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'app/views/about.html',
				controller  : 'aboutController'
			})
// route for the about page
			.when('/person', {
				templateUrl : 'app/views/person.html',
				controller  : 'PersonCtrl'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'app/views/contact.html',
				controller  : 'contactController'
			});
	});



	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});


