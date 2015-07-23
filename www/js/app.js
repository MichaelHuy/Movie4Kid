// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var FFK = angular.module('FFK', ['ionic', 'ngSanitize', 'ngCordova']);

FFK.run(function($ionicPlatform, $cordovaDevice, $cordovaGoogleAds ) {
    
  //   var tag = document.createElement('script');
  // //tag.src = "http://www.youtube.com/iframe_api";
  // tag.src = "http://www.youtube.com/player_api";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });


        var admobid = {
            banner: 'ca-app-pub-7472000144720385/3168889950',
            interstitial: 'ca-app-pub-7472000144720385/9075822752'
        };

        document.addEventListener('deviceready', function () {
            // if ($cordovaDevice) {
            //     vm.cordova = $cordovaDevice.getCordova();
            //     vm.model = $cordovaDevice.getModel();
            //     vm.platform = $cordovaDevice.getPlatform();
            //     vm.version = $cordovaDevice.getVersion();
            // } else {
            //     vm.deviceSupport = 'No device support!';
            // }

            if ($cordovaGoogleAds) {
                setupAds();
            } else {
                //vm.adSupport = 'No ad support';
            }

            //$scope.$apply();
        });

        function setupAds() {
            //vm.adSupport = 'Ads are supported';

            try {
                $cordovaGoogleAds.createBanner({
                    adId: admobid.banner,
                    position: $window.AdMob.AD_POSITION.BOTTOM_CENTER,
                    isTesting: true,
                    autoShow: true
                });

                $cordovaGoogleAds.prepareInterstitial({
                    adId: admobid.interstitial,
                    isTesting: true,
                    autoShow: false
                });
            } catch (e) {
                alert(e);
            }
        }

        function showFullAd() {
            try {
                if (true) {
                    $cordovaGoogleAds.showInterstitial()
                        .then(function () {
                            $cordovaGoogleAds.prepareInterstitial({
                                adId: admobid.interstitial,
                                autoShow: false
                            });
                        });
                } else {
                    alert('No Ads!');
                }
            } catch (e) {
                alert(e);
            }
        }

})

.config(function($httpProvider,$stateProvider, $urlRouterProvider, $sceDelegateProvider, $ionicConfigProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    
    $ionicConfigProvider.tabs.position('bottom'); // other values: top
    
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "views/tabs.html"
  })
  //kid channel and learning
 .state('tab.menukidchannels', {
      url: '/kidchannels',
      views: {
        'tab-channels': {
          templateUrl: 'views/tab-menu-channels.html',
          controller: 'MenuKidChannelsCtrl'
        }
      }
    })
  .state('tab.channels', {
      url: '/channels',
      views: {
        'tab-channels': {
          templateUrl: 'views/tab-channels.html',
          controller: 'KidChannelsCtrl'
        }
      }
    })
    .state('tab.channelplay', {
      url: '/channels/:movieId',
      views: {
        'tab-movies': {
          templateUrl: 'views/videoplay.html',
          controller: 'VideoPlayCtrl'
        }
      }
    })
  
  
  // Each tab has its own nav history stack:
  .state('tab.menucars', {
    url: '/menucars',
    views: {
      'tab-cars': {
        templateUrl: 'views/tab-menu-cars.html',
        controller: 'MenuCarsCtrl'
      }
    }
  })

  .state('tab.cars', {
    url: '/cars',
    views: {
      'tab-cars': {
        templateUrl: 'views/tab-cars.html',
        controller: 'CarsCtrl'
      }
    }
  })

  .state('tab.carvideoplay', {
      url: '/cars/:movieId',
      views: {
        'tab-cars': {
          templateUrl: 'views/videoplay.html',
          controller: 'VideoPlayCtrl'
        }
      }
  })
  .state('tab.menumovies', {
      url: '/menumovies',
      views: {
        'tab-movies': {
          templateUrl: 'views/tab-menu-movies.html',
          controller: 'MenuMoviesCtrl'
        }
      }
    })
  .state('tab.movies', {
      url: '/movies',
      views: {
        'tab-movies': {
          templateUrl: 'views/tab-movies.html',
          controller: 'MoviesCtrl'
        }
      }
    })
    .state('tab.videoplay', {
      url: '/movies/:movieId',
      views: {
        'tab-movies': {
          templateUrl: 'views/videoplay.html',
          controller: 'VideoPlayCtrl'
        }
      }
    })

    .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'views/tab-favorites.html',
          controller: 'FavoritesCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'views/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/kidchannels');

});
