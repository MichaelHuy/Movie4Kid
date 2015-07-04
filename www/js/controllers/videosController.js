FFK.controller('VideoPlayCtrl', function ($scope, $http, $log, VideosService, $stateParams, $sce) {

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    var baseURL = "http://www.youtube.com/embed/";
   $scope.currentURL = baseURL + $stateParams.movieId + "?autoplay=1&origin=http://example.com";

//     function launch (id, title) {
//       VideosService.launchPlayer(id, title);
// //      VideosService.archiveVideo(id, title);
// //      VideosService.deleteVideo($scope.upcoming, id);
//       $log.info('Launched id:' + id + ' and title:' + title);
//     };

    //$scope.launch($stateParams.carId, "Le Cong Huy");
//    $scope.queue = function (id, title) {
//      VideosService.queueVideo(id, title);
//      VideosService.deleteVideo($scope.history, id);
//      $log.info('Queued id:' + id + ' and title:' + title);
//    };

    // $scope.playVideo = function() {
    //     launch("kRJuY6ZDLPo", "La Roux - In for the Kill (Twelves Remix)");
    // }
    // $scope.delete = function (list, id) {
    //   VideosService.deleteVideo(list, id);
    // };

});