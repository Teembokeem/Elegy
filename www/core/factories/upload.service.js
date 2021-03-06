(function() {
'use strict';
// TODO:
  // 1. do event service

  angular
    .module('Services')
    .factory('uploadService', uploadService);

    var upload = {}

  uploadService.$inject = ['$log', '$q', '$http', 'Upload', 'urlFactory'];

  function uploadService($log, $q, $http, Upload, urlFactory ) {

    var service = {
      uploadFile: uploadFile
    };

    function autoRotate( url ) {
        var split = url.split("/upload")
        split.splice(1,0,"/upload/a_auto")
        return split.join('')
    }

    // EXPORTED FUNCTIONS
    function uploadFile( file, path, imageType, extra ) {
      $log.instantiate("Upload Service Upload File", "method")
      return Upload.upload({
      url: "https://api.cloudinary.com/v1_1/dtzbpdvnm/image/upload",
        data: {
        upload_preset: "nufgdp6b",
        tags: 'myphotoalbum',
        file: file
            }
      })
      .then(function (response){
       response.data.secure_url = autoRotate(response.data.secure_url)
        if (imageType == "product") {
            $http({
                method: "PUT",
                url: urlFactory + path,
                data: {
                    image: response.data.secure_url
                }
            })
            .then(function( response ) {
             $log.info("yes")
            })
        } else if (imageType == "departed") {
            return response.data.secure_url
        } else if (imageType == "user") {
            return response.data.secure_url
        } else if (imageType == "media feed") {
            $http({
                method: "PUT",
                url: urlFactory + path,
                data: {
                    media: response.data.secure_url
                }
            })
            .then(function( response ) {
                // console.log(response )
                return response
            })
        } else {
            $log.debug( "Something happened" )
        }
      })
      .catch(function(err) {
          $log.info("ehoh eror")
          return err;
      })
    }
  
    return service;
  }
})();