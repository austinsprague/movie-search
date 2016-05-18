(function (){
  angular
    .module('app')
    .controller('InfoController', InfoController);

  function InfoController($routeParams, MoviesService, $location){
    var vm = this;

    MoviesService.getMovies($routeParams.movieTitle).then(function(movie){
      vm.movies = movie;
    });

    vm.getDetail = function(movie) {
      console.log('get detail pushed');
      console.log(movie);
      $location.path('/detail/' + movie.imdbID);
    }
  }
})();
