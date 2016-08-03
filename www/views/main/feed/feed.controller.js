(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Feed.controller', FeedController);
  
  FeedController.$inject = ['$log', 'dataService', '$http', 'urlFactory', 'uploadService', 'authService', 'blogService'];

  function FeedController($log, dataService, $http, urlFactory, uploadService, authService, blogService) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;
    var blog = dataService.retrieveData(['blog'])
    var departed = dataService.retrieveData('departed');
    var userId = authService.currentUser()._id
    console.log("THIS IS TEH BLOG", blog)
    console.log("THIS IS TEH departed", departed)
    vm.departed = departed;
    vm.items = blog.posts
    vm.clicked = true;
    vm.passive = 'feed';
    vm.share;
    vm.expandEul = false;

    // LOCAL VARS
  
    // BOUND FUNCTIONS

    // HELPERS

    vm.submitMemory = function() {
      var blogObj = {
        text: vm.share,
        refUser: userId
      }
      console.log(blog._id, "THROUGH THE WORMHOLE!" ,blogObj)
      if( vm.media ) {
        uploadMedia()
      } else if (vm.share) {
        $http( {
          method: "PUT",
          url: urlFactory + "/blog/" + blog._id,
          data: blogObj
        } ).then( function( response ) {
          console.log( "REponse here :", response)
          vm.share = ""
          vm.media = ""
          blogService
            .grabBlog(blog._id)
            .then(function(done) {
              dataService.setData(['blog'], [done.data]);
              blog = dataService.retrieveData('blog');
              vm.items = response.data.data.posts
            })
            .catch(function(err) {
              $log.info("error", err);
            })
        })
      }
    }

     function uploadMedia() {
      console.log("HERE")
      uploadService.uploadFile( vm.media, urlFactory + blogURL, "departed", blogObj )
      console.log("TOuch")
    }

    vm.likeThis = function(id) {
      $http( {
          method: "PUT",
          url: urlFactory + "/blog/" + blog._id,
          data: blogObj
        } ).then( function( response ) {
          console.log( "REponse here :", response)
          vm.items = response.data.data.posts
        })
    }

  }
})();