(function() {
  'use strict';

  angular
    .module('Configs')
    .config(httpInterceptor)
  
  httpInterceptor.$inject = ['$httpProvider'];

  function httpInterceptor($httpProvider) {
    $httpProvider.interceptors.push('jsonHeadersService');
    $httpProvider.interceptors.push('tokenSigningService');
    $httpProvider.interceptors.push('cloudinaryHeadersService');
  }
})();