
//Modules
var app = angular.module("WeatherApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/daily", {
        templateUrl : "views/dailyInfo.html"
    })
    .when("/hourly", {
        templateUrl : "views/hourlyInfo.html"
    }).otherwise({
        redirectTo: '/'
    });
});



