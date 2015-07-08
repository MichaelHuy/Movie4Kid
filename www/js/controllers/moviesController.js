FFK
.controller('MoviesCtrl', function($rootScope, $scope,$state, $log, $ionicLoading, SearchService, VideosService, $location) {
    $scope.titleHeader = $rootScope.titleHeader;
    $ionicLoading.show();
    SearchService.getListVideoByPlaylistId($rootScope.currentMoviePlaylist)
          .success(function (data) {
        //var results = VideosService.listResults(data);
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
})