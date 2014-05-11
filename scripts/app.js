'use strict';

angular.module('angularApp', [
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    // static way, full hashbang '#!'
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  });
