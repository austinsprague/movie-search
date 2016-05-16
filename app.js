(function () {
  'use strict';

  angular
    .module('app', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      controller: 'HomeController',
      controllerAs: 'Home',
      templateUrl: 'views/home.html'
    }).when('/info/:id', {
      controller: 'InfoController',
      contollerAs: 'Info',
      templateUrl: 'views/info.html'
    }).
    otherwise({
      redirectTo: '/'
    })

    $locationProvider.html5Mode(true);
  }
})();
