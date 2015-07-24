FFK.controller('VideoPlayCtrl', function ($rootScope, $scope, $http, $log, VideosService, $stateParams, $sce) {

//    $scope.trustSrc = function(src) {
//      return $sce.trustAsResourceUrl(src);
//    }
//    var baseURL = "http://www.youtube.com/embed/";
//   $scope.currentURL = baseURL + $stateParams.movieId + "?autoplay=1&origin=http://example.com";
//

   $scope.currentVideoPlayTitle = $rootScope.currentVideoPlayKidChannelTitleTitle;
    
    $scope.current = $stateParams.movieId;
	$scope.width = 480;
	$scope.height = 360;



	$scope.code = function(){
		return '<youtube id="' + $scope.current + '" width="' + $scope.width + '" height="' + $scope.height + '"></youtube>';
	}
    
               

});