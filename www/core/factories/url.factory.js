(function() {
  'use strict';

  angular
    .module('Services')
    .factory('urlFactory', urlFactory);
  
  urlFactory.$inject = [];

  function urlFactory() {
    return 'http://localhost:3000'
    // return 'http://52.41.209.93:3000'

  }

})();