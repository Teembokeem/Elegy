(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Feed.controller', FeedController);
  
  FeedController.$inject = ['$log', 'dataService', '$http', 'urlFactory', 'uploadService', 'authService'];

  function FeedController($log, dataService, $http, urlFactory, uploadService, authService) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;
    var blog = dataService.retrieveData(['blog'])
    var userId = authService.currentUser()._id
    console.log("THIS IS TEH BLOG", blog)
    vm.items = blog.posts
    vm.clicked = true;
    vm.passive = 'feed';
    vm.share;
    vm.expandEul = false;
    vm.departed = {}
    vm.departed.photo = "https://i.ytimg.com/vi/H9w1rLhn1uU/maxresdefault.jpg"
    vm.departed.eulogy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    // LOCAL VARS
    vm.hi ="Something"
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
          vm.items = response.data.data.posts
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
          url: urlFactory + "/post/" + id,
          data: userId
        } ).then( function( response ) {
          console.log( "REponse here :", response)
          vm.items = response.data.data.posts
        })
    }

  }
})();