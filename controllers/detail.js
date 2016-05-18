(function () {
  angular
    .module('app')
    .controller('DetailController', DetailController);

  function DetailController($routeParams, $location, MoviesService) {
    var vm = this;

    MoviesService.getMovie($routeParams.movieId).then(function(movie){
      vm.movies = movie;
    });

  }
})();
