(functino() {
  'use strict';

  angular
    .module('Configs')
    .config(function($ionicConfigProvider) {
      
      $ionicConfigProvider.views.maxCache(0);

      $ionicConfigProvider.views.swipeBackEnabled(false);


    })
})(); 