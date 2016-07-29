(function() {
  'use strict'

  console.log("transaction service")
  angular
    .module('Services')
    .factory('transactionService', transactionService);

  transactionService.$inject = ['$log', '$http', 'urlFactory'];

  function transactionService($log, $http, urlFactory) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Service');

    var service = {
      initializeBrainTree: initializeBrainTree
    }
    return service;


    function initializeBrainTree() {
      $log.instantiate('Transaction Service Initialize BrainTree', 'method')
      return $http({
        method: 'GET',
        url: urlFactory + '/client_token'
      })
      .then(function(response) {
        $log.debug("success", response);
        return response.data.clientToken
      })
    }

  } 

})();