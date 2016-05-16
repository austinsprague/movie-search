(function() {
  angular
    .module('app')
    .factory('MoviesService', MoviesService);

  function MoviesService($http) {
    var omdbapi = 'http://www.omdbapi.com/?t=';
    return {
      getMovie: function(title) {
        return $http.get(omdbapi + title)
          .then(function(result) {
            var movieInfo = result.data;
            return movieInfo;
          });
      }
    }
  }
})();
