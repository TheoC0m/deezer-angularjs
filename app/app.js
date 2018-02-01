var app = angular.module('DeezerAngularJS', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController'

        })
        .otherwise({
            redirectTo: '/'
        });
}]);
