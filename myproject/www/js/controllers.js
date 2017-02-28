angular.module('starter.controllers', [])



.controller('ChatsCtrl', function(NgMap,$cordovaGeolocation,$scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      console.log(lat,long)
      $scope.geo={
        lngi : long,
        lati : lat
      }
    }, function(err) {
      // error
    });

  NgMap.getMap().then(function(map) {
    
  });

})

