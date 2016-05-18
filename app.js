(function () {
  'use strict';

  angular
    .module('app', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider.when('/info/:movieTitle', {
      controller: 'InfoController',
      controllerAs: 'Info',
      templateUrl: 'views/info.html'
    }).when('/detail/:movieId', {
      controller: 'DetailController',
      controllerAs: 'Detail',
      templateUrl: 'views/detail.html'
    }).
    otherwise({
      redirectTo: '/'
    })

    $locationProvider.html5Mode(true);
  }
})();
