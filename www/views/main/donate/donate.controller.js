(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('Donate.controller', DonateController);

  DonateController.$inject = ['dependency1'];
  function DonateController(dependency1) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { }
  }
})();