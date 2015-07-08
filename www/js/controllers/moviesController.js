FFK
.controller('MoviesCtrl', function($rootScope, $scope,$state, $log, $ionicLoading, SearchService, VideosService, $location) {
    $scope.titleHeader = $rootScope.titleHeader;
    $ionicLoading.show();
    $scope.currentPageToken = "";
    SearchService.getListVideoByPlaylistId($rootScope.currentMoviePlaylist, $scope.currentPageToken)
          .success(function (data) {
          $scope.currentPageToken = data.nextPageToken;
          $scope.results = VideosService.listResults(data);
          $log.info(JSON.stringify($scope.results));
          $ionicLoading.hide();
      })
      .error( function () {
        $ionicLoading.hide();
        //alert("Please check network or turn on 3G");
        $log.info('Search error');
      });
    
    $scope.viewMoviePlayList = function (playlist) {
      var videoId = playlist.resourceId.videoId;
      $rootScope.currentVideoPlayTitle = playlist.title;
      $location.path("/tab/movies/"+videoId);

    }

  $scope.loadMore = function(){

     SearchService.getListVideoByPlaylistId($rootScope.currentMoviePlaylist, $scope.currentPageToken)
          .success(function (data) {
          $scope.currentPageToken = data.nextPageToken;
          var newResults = VideosService.listResults(data);
          $scope.results = $scope.results.concat(newResults);
      })
      .error( function () {
        //alert("Please check network or turn on 3G");
        $log.info('Search error');
      });

  };

})