(function () {
  angular
    .module('app')
    .controller('DetailController', DetailController);

  function DetailController($location, MoviesService) {
    var vm = this;

    vm.getDetail = function() {
      console.log('get detail pushed');
      $location.path('/detail/' + vm.movies.imbdId);
    }
  }
})();
