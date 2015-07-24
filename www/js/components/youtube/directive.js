FFK
.directive('youtube', ['youtubeEmbed', '$window', function(youtubeEmbed, $window){
	return {
		restrict: 'E',
		template: '<div id="player"></div>',
		link: function(scope, element, attrs){
			youtubeEmbed.yt().then(function(yt){
				$window.onYouTubePlayerAPIReady = function(){
					scope.player = new YT.Player('player', {
						height: attrs.height,
						width: attrs.width,
						videoId: attrs.id
					});					

					scope.createPlayer = function(attrs){
						if(scope.player) scope.player.destroy();
						return new YT.Player('player', {
							height: attrs.height,
							width: attrs.width,
							videoId: attrs.id
						});
					}

				}

				scope.$watch(function(){ return attrs.id;}, function(newVal){
						var videoId = newVal;
						console.log(videoId);
						scope.player = scope.createPlayer(attrs);
				});

			});
		}
	};
}])
.directive('youtubetem', function($window) {
  return {
    restrict: "E",

     scope: {
      height: "@",
      width: "@",
      videoid: "@"
    },

     template: '<div></div>',

     link: function(scope, element) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

       var player;

       $window.onYouTubeIframeAPIReady = function() {

         player = new YT.Player(element.children()[0], {
          playerVars: {
            autoplay: 1,
            html5: 1,
            theme: "light",
            modesbranding: 0,
            color: "white",
            iv_load_policy: 3,
            showinfo: 1,
            controls: 1
          },

           height: scope.height,
          width: scope.width,
          videoId: scope.videoid, 
        });
      }

       scope.$watch('videoid', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }

         player.cueVideoById(scope.videoid);

       }); 

       scope.$watch('height + width', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }

         player.setSize(scope.width, scope.height);

       });
    }  
  };
});