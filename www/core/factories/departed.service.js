(function() {
'use strict';

  angular
    .module('Services')
    .factory('departedService', departedService);

  departedService.$inject = ['$log', '$http', 'urlFactory'];
  function departedService($log, $http, urlFactory) {
    var service = {
      updateEulogy: updateEulogy
    };
    
    return service;

    ////////////////
    function updateEulogy(id, eulogy) { 
      $log.instantiate("Departed Service Update Eulogy", 'method');
      // $log.info("id", id, eulogy)
      return $http({
          method: 'PUT',
          url: urlFactory + '/departed/' + id,
          data: {
            eulogy: eulogy
          }
        })
        .then(function(done) {
          return done.data.data;
        })
        .catch(function(err) {
          return err;
        })
      }

  }
})();