(function() {
  angular
    .module('app')
    .factory('MoviesService', MoviesService);

  function MoviesService($http) {
    var omdbapi = 'http://www.omdbapi.com/?s=';
    var movies;
    return {
      getMovie: function(title) {
        return $http.get(omdbapi + title)
          .then(function(result) {
            movies = result.data.Search;
            return movies;
            console.log(movies);
          });
      }
    }
  }
})();
