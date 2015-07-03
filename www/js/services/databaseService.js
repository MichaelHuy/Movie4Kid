FFK
.factory('DatabaseService', function($http, $log) {
  var baseUrl = "http://ffkserver.mybluemix.net";
    return {
        getCarMenu : function () {
          return $http.get(baseUrl+'/api/carplaylist');
        },
        getMovieMenu : function () {
          var url = baseUrl + "/api/movieplaylist";
          $http.get(url);
        },
        getFavoriteMovie : function () {
          return $http.get(baseUrl+'/api/favoritevideo');
        }
    }
})