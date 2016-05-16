(function() {
  angular
    .module('app')
    .factory('MoviesService', MoviesService);

  function MoviesService($http) {
    var omdbapi = 'http://www.omdbapi.com/?t=';
    // var title = 't=' + 'gump'
    return {
      getMovie: function(title) {
        return $http.get(omdbapi + title)
          .then(function(data) {
            var movieInfo = data.data;
            // console.log(movieInfo);
            return movieInfo;
          });
      }
    }
  }
})();
