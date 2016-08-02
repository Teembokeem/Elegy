(function() {
  'use strict'
  // TODO: 
    // 1.
  console.log("hello transaction")
  angular
    .module('Controllers')
    .controller('Transaction.controller', TransactionController);
  
  TransactionController.$inject = ['$log', 'transactionService', 'brainTree', 'dataService', 'authService', 'eventService', '$state'];

  function TransactionController($log, transactionService, brainTree, dataService, authService, eventService, $state) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Controller');
    var vm = this;
    var clientToken = brainTree;
    if (clientToken != null) {
      $log.info("Client Token secured.")
    }

    // LOCAL VARS
    var item = dataService.retrieveData('listing');
    vm.item = [item]
    vm.vendor = dataService.retrieveData('vendor');
    vm.itemPrice = parseFloat(vm.item[0].price);
    vm.serviceFee = 3.00;
    vm.transaction = {
      vendor: vm.vendor._id,
      user: authService.currentUser(),
      product: item._id,
      total: vm.itemPrice + vm.serviceFee
    }

    // LOGS
    $log.info("vm.item:", vm.item, parseFloat(3.00));
    $log.info("vm.vendor:", vm.vendor);

    // BOUND FUNCTIONS

    // HELPERS
    braintree.setup(
      brainTree,
      "dropin",
      { container: "payment-form",
        paymentMethodNonceReceived: function(event, nonce) {
          $log.debug("nonce received", nonce, event)
          transactionService
            .queryBraintreeTransaction(nonce, vm.transaction)
            .then(function(done) {
              $log.info("success", done)
              eventService
                .updateEvent(done.data._id, dataService.retrieveData('event')['details'][dataService.retrieveData('eventStep').title.toLowerCase()]['_id'], dataService.retrieveData('eventStep').title.toLowerCase(), dataService.retrieveData('stepItem'))
                .then(function(res) {
                  eventService
                    .retrieveEvent(dataService.retrieveData('event')._id)
                    .then(function(res) {
                      dataService.setData(['event'], [res]);
                      $state.go('app.departed-tab.event');
                    })
                    .catch(function(err){
                      $log.info("ehoh", err)
                      return err
                    })
                })
                .catch(function(err) {
                  $log.info("err", err)
                })
            })
        }
      }
    )

  }

})();