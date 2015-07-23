FFK
.controller('MenuKidChannelsCtrl', function($rootScope, $scope, $http, $log, $ionicLoading, DatabaseService, $state) {
    $ionicLoading.show();
    DatabaseService.getKidChannelsMenu().success( function (data) {
        $scope.items = data;
          $log.info(JSON.stringify($scope.item));
          $ionicLoading.hide();
      })
      .error( function () {
        $ionicLoading.hide();
        //alert("Please check network or turn on 3G");
        $log.info('Search error');
      });
    $scope.clickOnItemOfMenu = function(item) {
      $rootScope.currentChannelPlaylist = item.playlistId;
      $rootScope.titleHeader= item.name;
      $state.go('tab.channels');
    }
    
})