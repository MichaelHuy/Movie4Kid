FFK
.factory('SearchService', function($http, $log) {
    return {
        getListSearch : function (textToSearch) {
          return $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: 'AIzaSyBxIZ0ZS2zjicXRsxNFnqY0wVRFhwl7FhQ',
              type: 'video',
              maxResults: '8',
              part: 'id,snippet',
              fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
              q: textToSearch
            }
          });
    //      .success( function (data) {
    //        var results = VideosService.listResults(data);
    //        $scope.results = results;
    //          $log.info(JSON.stringify(results));
    //          $ionicLoading.hide();
    //      })
    //      .error( function () {
    //        $log.info('Search error');
    //      });
        } 
    }
})