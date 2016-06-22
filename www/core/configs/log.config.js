angular.module('Configs', [])

.config(['$provide', function ($provide) {
    $provide.decorator('$log', ['$delegate', function ($delegate) {
        // Keep track of the original debug method, we'll need it later.
        var origDebug = $delegate.debug;
        /*
         * Intercept the call to $log.debug() so we can add on 
         * our enhancement. We're going to add on a date and 
         * time stamp to the message that will be logged.
         */
        $delegate.instantiate = function(arg, entity) {
           console.log("> " + arg + " " + entity + " activated. <")
            
            // Send on our enhanced message to the original debug method.
         
        }
        return $delegate;
    }]);
}])