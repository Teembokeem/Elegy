(function() {
'use strict';

    angular
        .module('Filters')
        .filter('size', size);

    size.$inject = [];

    var splitAt = 'upload/';
    function addWidth(cloudinrayUrl, transformations) {
        var split   = cloudinrayUrl.split(splitAt);
        transformations = transformations + '/';
        return split[0] + splitAt + transformations + split[1]; 
    }

    function size() {
        return function(url, transformations) {
            if (url && url.indexOf(splitAt) >= 0) {
                return addWidth(url, transformations);
            }
            return url;
        };
    }
        
})();