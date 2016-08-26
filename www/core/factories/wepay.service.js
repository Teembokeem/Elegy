(function() {
'use strict';

  angular
    .module('Services')
    .factory('wepayService', wepayService);

  wepayService.$inject = ['$log', '$http', 'urlFactory'];
  function wepayService($log, $http, urlFactory) {
    var service = {
      grabAccesstoken: grabAccesstoken
    };
    
    return service;

    ////////////////
    function grabAccesstoken(code) { 
      $log.instantiate("Wepay Service Grab Access Token", "Method")
      $http({
        method: 'POST',
        url: urlFactory + '/wepayToken',
        data: {
          code: code
        }
      })
      .then(function(response) {
        return response
      })
      .catch(function(err) {
        return err;
      })
    }
  }
})();