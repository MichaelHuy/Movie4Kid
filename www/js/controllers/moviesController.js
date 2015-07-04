FFK
.controller('MoviesCtrl', function($rootScope, $scope,$state, $log, $ionicLoading, SearchService, VideosService, $location) {
  
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
        alert("Please check network or turn on 3G");
        $log.info('Search error');
      });
    
    // $scope.clickViewVideo = function (video) {
    //   var absUrl = $location.absUrl();
    //   var videoId = video.resourceId.videoId;
    //   $log.info(absUrl + "and video is : "+videoId);
    //   var toUrl = absUrl+"/"+videoId;
    //   $log.info(toUrl);
    //   $location.path(toUrl);

    // }
})