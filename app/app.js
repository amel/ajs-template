var app = angular.module('MyApp', ['ngRoute', 'ngTouch', 'ngSanitize', 'ui.bootstrap', 'angular-responsive']);

app.config(function ($routeProvider, $httpProvider, $locationProvider, responsiveHelperProvider, $compileProvider) {
	//$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode(true);
	
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data|chrome-extension):/);
	
	
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/main/home.html'
			// templateUrl: 'views/'+device+'home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.directive('labelfooter', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'app/templates/main/footer.html',
	};
});