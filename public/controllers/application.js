var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "public/views/login.html",
            controller: 'loginCtrl'
        })
        .when("/profile", {
            templateUrl: "public/views/profile.html",
            controller: 'profileCtrl'
        })
        .when("/cards", {
            templateUrl: "public/views/cards.html",
            controller:"cardCtrl"
        })
});



