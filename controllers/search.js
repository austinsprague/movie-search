(function () {
  angular
    .module('app')
    .controller('SearchController', SearchController);

  function SearchController($location, MoviesService) {
    var vm = this;
    vm.submitSearch = function() {
      ///
      ///
      $location.path('/info/' + vm.search);
    }
  }
})();
