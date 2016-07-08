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
      Upload.upload({
      url: "https://api.cloudinary.com/v1_1/dtzbpdvnm/image/upload",
      data: {
      upload_preset: "nufgdp6b",
      tags: 'myphotoalbum',
      file: file
        }
      })
      .then(function (response){
        $log.log(response.data.secure_url)
        if (imageType == "Something") {
            $http({
                method: "PUT",
                url: urlFactory + path,
                data: {
                    photoURL: response.data.secure_url
                }
            })
            .then(function( response ) {

            })
        } else if (imageType == "Product Image") {
            $http({
                method: "POST",
                url: urlFactory + path,
                data: {
                    photoURL: response.data.secure_url
                }
            })
            .then(function( response ) {

            })
        } else if (imageType == "Something Else") {
            $http({
                method: "PUT",
                url: urlFactory + path,
                data: {
                    photoURL: response.data.secure_url
                }
            })
            .then(function( response ) {

            })
        } else {
            $log.debug( "Something happened", response )
        }
      }, function (error){
        $log.debug(error)
      })
    }
  
    return service;
  }
})();