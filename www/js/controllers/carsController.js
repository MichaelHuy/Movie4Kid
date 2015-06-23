FFK
.controller('CarsCtrl', function($scope, $http, $log, $ionicLoading, SearchService, VideosService) {
    $ionicLoading.show();
    SearchService.getListSearch("chung tu don")
          .success( function (data) {
        var results = VideosService.listResults(data);
        $scope.results = results;
          $log.info(JSON.stringify(results));
          $ionicLoading.hide();
      })
      .error( function () {
        $ionicLoading.hide();
        alert("Please check network or turn on 3G");
        $log.info('Search error');
      });
    
    
})