(function() {
'use strict';

    angular
        .module('Configs')
        .factory('cloudinaryHeadersService', cloudinaryHeadersService);

    cloudinaryHeadersService.$inject = [];
    function cloudinaryHeadersService() {
        var service = {
            request: checkHeaders
        };
        
        return service;

        ////////////////
        function checkHeaders(config) {
            // Check if going to cloudinary
            if (config.url.indexOf('api.cloudinary') >= 0) {
                // Remove headers for cors
                config.headers['Content-Type'] = undefined;
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                delete config.headers['Authorization']; 
            }
            return config;
        }
    }
})();