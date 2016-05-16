(function (){
  angular
    .module('app')
    .controller('InfoController', InfoController);

  function InfoController($routeParams){
    var vm = this;

    // console.log($routeParams.id);

    // vm.movie = MoviesService.getImdbMovies(gump);
    // console.log(vm.movie);
  }
})();
