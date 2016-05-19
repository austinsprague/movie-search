(function() {
  angular
    .module('app')
    .factory('MoviesService', MoviesService);

  function MoviesService($http) {
    var omdbapi = 'http://www.omdbapi.com/?';
    var searchTitles = 's=';
    var searchId = 'i='
    var movies;
    return {
      getMovies: function(title) {
        return $http.get(omdbapi + searchTitles + title)
          .then(function(result) {
            movies = result.data.Search;
            return movies;
            // console.log(movies);
          });
      },
      getMovie: function(id) {
        return $http.get(omdbapi + searchId + id)
          .then(function(result) {
            movies = result.data;
            console.log(movies);
            return movies;
          });
      }
    }
  }
})();
