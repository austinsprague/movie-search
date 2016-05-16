(function () {
  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController($location, MoviesService) {
    var vm = this;

    vm.title = 'This is the home page';

    vm.submitSearch = function() {
      $location.path('/info/' + vm.search);
    }

    // vm.movies = MoviesService();
    //
    // MoviesService.getImdbMovies().then(function(info){
    //   console.log(info);
    //   vm.info = info;
    // })

  }
})();


// vm.movies = MoviesService.getMovies();

// MoviesService.getImdbMovies().then(function(info){
//   console.log(info);
//   vm.info = info;
// })
