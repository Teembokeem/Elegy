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

    // EXPORTED FUNCTIONS
    function uploadFile( file, path, imageType, data ) {
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
        $log.log(response.data.secure_url)
        if (imageType == "product") {
            $http({
                method: "PUT",
                url: urlFactory + path,
                data: {
                    image: response.data.secure_url
                }
            })
            .then(function( response ) {
             $log.info("yes", response)
            })
        } else if (imageType == "departed") {
            return response.data.secure_url
        } else if (imageType == "Something Else") {
            $http({
                method: "PUT",
                url: urlFactory + path,
                data: {
                    image: response.data.secure_url
                }
            })
            .then(function( response ) {

            })
        } else {
            $log.debug( "Something happened", response )
        }
      })
      .catch(function(err) {
          $log.info("ehoh eror", err)
      })
    }
  
    return service;
  }
})();