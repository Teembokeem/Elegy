(function() {
  'use strict';

  angular
    .module('Constants')
    .constant('EventDataTemplates', {
      
      decisions: {
          interment: {
              cemetery: {
                  casket: {
                      item: {}
                  },
                  burialVault: {
                      item: {},
                  },
                  markers: {
                      item: {}
                  }

              },
              mausoleum: {
                  casket: {
                      item: {}
                  },
                  marker: {
                      item: {}
                  }
              },
              cremation: {
                  cremation_cemeteryEntombment: {
                      cremationMarker: {
                          item: {}
                      },
                      urn: {
                          item: {}
                      }
                  },
                  cremation_cemeteryBurial: {
                      burialVault: {
                          details: {}  
                      },
                      cremationMarker: {
                          item: {}
                      },
                      urn: {
                          item: {}
                      }
                  },
                  cremation_scatteringCemetery: {
                      temporaryUrn: {
                          item: {}
                      }
                  },
                  cremation_returnToFamily: {
                      urn: {
                          item: {}
                      }
                  },
                  cremation_scatteringSea: {
                      temporaryUrn: {
                          item: {}
                      }
                  }
              },
              donation: {
                  recipient: {}
          },
          services: {

          }
      }
    }
  })

})();