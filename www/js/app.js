// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var FFK = angular.module('FFK', ['ionic','ngCordova']);

FFK.run(function($ionicPlatform) {
    
    var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    
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
})

.config(function($httpProvider,$stateProvider, $urlRouterProvider) {
delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "views/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.cars', {
    url: '/cars',
    views: {
      'tab-cars': {
        templateUrl: 'views/tab-cars.html',
        controller: 'CarsCtrl'
      }
    }
  })

  .state('tab.car-detail', {
      url: '/cars/:carId',
      views: {
        'tab-cars': {
          templateUrl: 'views/tab-item-details.html',
          controller: 'VideosController'
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
  $urlRouterProvider.otherwise('/tab/cars');

});
