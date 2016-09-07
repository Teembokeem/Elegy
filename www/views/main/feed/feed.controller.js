(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Feed.controller', FeedController);
  
  FeedController.$inject = ['$log', 'dataService', '$http', 'urlFactory', 'uploadService', 'authService', 'blogService', '$ionicLoading', '$ionicModal', '$scope'];

  function FeedController($log, dataService, $http, urlFactory, uploadService, authService, blogService, $ionicLoading, $ionicModal, $scope) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;
    var blog = dataService.retrieveData(['blog'])
    var departed = dataService.retrieveData('departed');
    var userId = authService.currentUser()._id
    vm.departed = departed;
    vm.departed.eulogy = vm.departed.obituary === undefined ? "No eulogy prepared yet." : vm.departed.obituary  
    vm.items = blog.posts
    vm.clicked = true;
    vm.passive = 'feed';
    vm.share;
    vm.expandEul = false;

    // LOCAL VARS
    // BOUND FUNCTIONS

    // HELPERS
    function getMedia( posts ) {
      var media = []
      for ( var i in posts ) {
        if ( posts[i].media ) {
          media.push( posts[i] )
        }
      }
      return media
    }

    vm.media = getMedia( blog.posts )

    vm.submitMemory = function() {
      var blogObj = {
        text: vm.share,
        refUser: userId
      }
      if( vm.mediaUpload ) {
        var media = uploadMedia( blogObj )
        blogObj.media = media;
        $ionicLoading.show({
          templateUrl: 'views/templates/working.html'
        }).then(function() {
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
                  // blog = dataService.retrieveData('blog');
                  vm.items = done.data.posts
                })
                .catch(function(err) {
                  $log.info("error", err);
                })
            })
            setTimeout(function() {
              $ionicLoading.hide()
            }, 3000)
        })
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
              // blog = dataService.retrieveData('blog');
              vm.items = done.data.posts
            })
            .catch(function(err) {
              $log.info("error", err);
            })
        })
      }
    }

    function uploadMedia( blogObj ) {
      return uploadService.uploadFile( vm.mediaUpload, "/blog/" + blog._id, "media feed", blogObj )
    }

    vm.likeThis = function(id) {
      $http( {
          method: "PUT",
          url: urlFactory + "/like/" + blog._id,
          data: {
            postId: id,
            userId: userId
          }
        } ).then( function( response ) {
          blogService
            .grabBlog(response.data.data)
            .then(function(done) {
              dataService.setData(['blog'], [done.data]);
              vm.items = done.data.posts
            })
        })
    }

    $ionicModal.fromTemplateUrl('views/templates/image.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    vm.openModal = function(item) {
      vm.image = item
      $scope.modal.show()
      console.log(item,"HERE")
      console.log("vm.item", vm.image)
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

  }
})();