(function() {
  'use strict'

  // TODO: 
    // 1. 

  angular
    .module("Services")
    .factory('blogService', blogService);
  
  blogService.$inject = ['$log','$http', 'urlFactory'];

  function blogService($log, $http, urlFactory) {
    $log.instantiate('Blog', 'Service');
    var service = {
      grabBlog: grabBlog
    }

    function grabBlog(blogId) {
      $log.instantiate('Blog Service Grab Blog', 'method')
      // $log.info("your blogid", blogId)
      return $http({
        method: 'GET',
        url: urlFactory + '/blog/' + blogId
      })
      .then(function(response) {
        // $log.info("Success from /blog", response)
        return response.data
      })
      .catch(function(err) {
        // $log.info('err', err);
        return err
      })
    };

    // HELPERS

    return service;
  }

})();