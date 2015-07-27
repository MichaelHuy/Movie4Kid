FFK
.controller('MenuKidChannelsCtrl', function($rootScope, $scope, $http, $log, $ionicLoading, DatabaseService, $state, $cordovaNetwork) {
    
    var type = $cordovaNetwork.getNetwork();

    var isOnline = $cordovaNetwork.isOnline();

    alert(type);
    alert(isOnline);

    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
    })
    
    if (isOnline) {
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
    }
    
    $scope.clickOnItemOfMenu = function(item) {
      $rootScope.currentKidChannelPlaylist = item.playlistId;
      $rootScope.titleKidChannel= item.name;
      $state.go('tab.channels');
    }
    
})