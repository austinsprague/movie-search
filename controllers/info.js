(function (){
  angular
    .module('app')
    .controller('InfoController', InfoController);

  function InfoController($routeParams, MoviesService){
    var vm = this;

    vm.title = 'This is the info page';
    MoviesService.getMovie($routeParams.movieTitle).then(function(movie){
      vm.movie = movie;
      // console.log(vm.movie);
    });

  }
})();
