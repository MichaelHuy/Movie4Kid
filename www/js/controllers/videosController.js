FFK.controller('VideosController', function ($scope, $http, $log, VideosService, $stateParams) {

    init();
VideosService.loadPlayer();
    function init() {
      $scope.youtube = VideosService.getYoutube();
      $scope.results = VideosService.getResults();
      $scope.upcoming = VideosService.getUpcoming();
      $scope.history = VideosService.getHistory();
      $scope.playlist = true;
    }

    function launch (id, title) {
      VideosService.launchPlayer(id, title);
//      VideosService.archiveVideo(id, title);
//      VideosService.deleteVideo($scope.upcoming, id);
      $log.info('Launched id:' + id + ' and title:' + title);
    };

    //$scope.launch($stateParams.carId, "Le Cong Huy");
//    $scope.queue = function (id, title) {
//      VideosService.queueVideo(id, title);
//      VideosService.deleteVideo($scope.history, id);
//      $log.info('Queued id:' + id + ' and title:' + title);
//    };

    $scope.playVideo = function() {
        launch("kRJuY6ZDLPo", "La Roux - In for the Kill (Twelves Remix)");
    }
    $scope.delete = function (list, id) {
      VideosService.deleteVideo(list, id);
    };

    //get viewcount
    //https://www.googleapis.com/youtube/v3/videos?id=wiaUgJ1wAjE&key=AIzaSyBxIZ0ZS2zjicXRsxNFnqY0wVRFhwl7FhQ&part=statistics
    

    $scope.tabulate = function (state) {
      $scope.playlist = state;
    }
});