FFK
.controller('MenuMoviesCtrl', function($scope, $http, $log, $ionicLoading, DatabaseService) {
    $ionicLoading.show();
    DatabaseService.getMovieMenu().success( function (data) {
        $scope.menus = data;
          $log.info(JSON.stringify($scope.menus));
          $ionicLoading.hide();
      })
      .error( function () {
        $ionicLoading.hide();
        alert("Please check network or turn on 3G");
        $log.info('Search error');
      });
    
    
})