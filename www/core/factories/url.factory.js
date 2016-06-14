(function() {
  'use strict';

  angular
    .module('Services')
    .factory('UrlFactory', urlFactory);
  
  urlFactory.$inject = [];

  function urlFactory() {
    return 'http://localhost:3000'
  }

})();