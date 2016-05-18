(function (){
  angular
    .module('app')
    .controller('InfoController', InfoController);

  function InfoController($routeParams, MoviesService){
    var vm = this;

    MoviesService.getMovie($routeParams.movieTitle).then(function(movie){
      vm.movies = movie;
    });
  }
})();
