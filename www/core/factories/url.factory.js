(function() {
  'use strict';

  angular
    .module('Services')
    .factory('urlFactory', urlFactory);
  
  urlFactory.$inject = [];

  function urlFactory() {
    // return 'http://localhost:3000'
    return 'http://192.168.0.18:3000'
  }

})();