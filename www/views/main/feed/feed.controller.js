(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Feed.controller', FeedController);
  
  FeedController.$inject = ['$log'];

  function FeedController($log) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();