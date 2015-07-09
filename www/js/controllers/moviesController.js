FFK
.controller('MoviesCtrl', function($rootScope, $scope,$state, $log, $ionicLoading, SearchService, VideosService, $location) {
    $scope.titleHeader = $rootScope.titleHeader;
    //$ionicLoading.show();
    $scope.currentPageToken = "";
    $scope.hasMoreData = false;
    SearchService.getListVideoByPlaylistId($rootScope.currentMoviePlaylist)
          .success(function (data) {
          
          $scope.currentPageToken = data.nextPageToken;
          $scope.results = VideosService.listResults(data);
          $log.info(JSON.stringify($scope.results));
          $ionicLoading.hide();

          if ($scope.currentPageToken) {
            $scope.hasMoreData = true;
          }
      })
      .error( function () {
        $ionicLoading.hide();
        //alert("Please check network or turn on 3G");
        $log.info('Search error');
      });
    


  $scope.loadMore = function(){
    console.log("into load more items");
    if ($scope.currentPageToken) {
      console.log("start load more items with currentPageToken is: " + $scope.currentPageToken);
      SearchService.getMoreListVideoByPlaylistId($rootScope.currentMoviePlaylist, $scope.currentPageToken)
          .success(function (data) {
            console.log("data.nextPageToken in loadmore is : "+data.nextPageToken);
            if (!data.nextPageToken) {
              $scope.hasMoreData = false;
              $scope.currentPageToken = "";            
            } else {
              $scope.currentPageToken = data.nextPageToken;
            }
          
          var newResults = VideosService.listResults(data);
          $scope.results = $scope.results.concat(newResults);
          newResults = [];
          $scope.$broadcast('scroll.infiniteScrollComplete');
      })
      .error( function () {
        //alert("Please check network or turn on 3G");
        $log.info('Search error');
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    } else {
      console.log("load all video of ID");
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }

    
  };


    $scope.viewMoviePlayList = function (playlist) {
      var videoId = playlist.resourceId.videoId;
      $rootScope.currentVideoPlayTitle = playlist.title;
      $location.path("/tab/movies/"+videoId);

    }


})