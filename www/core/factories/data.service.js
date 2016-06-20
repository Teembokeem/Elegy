(function() {
'use strict';

  angular
    .module('Services')
    .factory('dataService', dataService);

    var data = {}

  dataService.$inject = ['$log'];

  function dataService($log) {
    console.log('Data service loaded.');

    var service = {
      getData: getData,
      setData: setData
    };
    
    return service;

    function getData(key) {
      return JSON.parse(localStorage.getItem(key));
    }

    function setData(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

  }
})();