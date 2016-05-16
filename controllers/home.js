(function () {
  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController($location, MoviesService) {
    var vm = this;

    vm.title = 'This is the home page';
    // vm.movies = MoviesService.getMovie(vm.search);
    // console.log(vm.movies);

    vm.submitSearch = function() {
      $location.path('/info/' + vm.search);
    }
  }
})();
