(function () {
  angular
    .module('app')
    .controller('SearchController', SearchController);

  function SearchController($location, MoviesService) {
    var vm = this;

    vm.title = 'Search for movie by title';
    // vm.movies = MoviesService.getMovie(vm.search);
    // console.log(vm.movies);

    vm.submitSearch = function() {
      $location.path('/info/' + vm.search);
    }
  }
})();
