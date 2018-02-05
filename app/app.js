var app = angular.module('DeezerAngularJS', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController'

        })
        .otherwise({
            redirectTo: '/'
        });

		$locationProvider.html5Mode(true);
}]);
