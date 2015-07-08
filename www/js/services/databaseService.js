FFK
.factory('DatabaseService', function($http, $log) {
  var baseUrl = "http://ffkserver.mybluemix.net";
    return {
        getCarMenu : function () {
          return $http.get(baseUrl+'/api/carplaylist');
        },
        getMovieMenu : function () {
          var url = baseUrl + "/api/movieplaylist";
          return $http.get(url);
        },
        getFavoriteMovie : function () {
          return $http.get(baseUrl+'/api/favorites');
        },
        addItemToFavorite: function(item) {
          return $http.post(baseUrl+'/api/favorites', item);
        },
        deleteItemFavoriteById : function(id) {
          return $http.delete(baseUrl+'/api/favorites/'+ id);
        }
    }
})