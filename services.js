(function() {
  angular
    .module('app')
    .factory('MoviesService', MoviesService);

  function MoviesService($http) {
      $http.get('http://www.omdbapi.com/?')
        .then(function(result) {
          console.log(result);
          return result;
        });
      }
})();


// var movies = [
//   {
//     name: 'movie',
//     id: 10
//   }
// ]
// return {
//   getMovies: function() {
//     return movies;
//   },
//   getMovie: function(id) {
//     var foundMovies = movies.filter(function(movie){
//       return movie.id == id;
//     })
//
//     if (foundMovies.length > 0) {
//       return foundMovies[0];
//     } else {
//       return null;
//     }
//   },
