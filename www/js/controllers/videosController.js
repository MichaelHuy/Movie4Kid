FFK.controller('VideoPlayCtrl', function ($rootScope, $scope, $http, $log, VideosService, $stateParams, $sce) {

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    var baseURL = "http://www.youtube.com/embed/";
   $scope.currentURL = baseURL + $stateParams.movieId + "?autoplay=1&origin=http://example.com";


   $scope.currentVideoPlayTitle = $rootScope.currentVideoPlayTitle;

});