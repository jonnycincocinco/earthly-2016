angular.module('Earthly.services')

.service('analytics', [
        '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
         //console.log('running track service');

          var track = function() {
            //console.log('analitycs: ' + $location.path() );

            $window._gaq.push(['_trackPageview', $location.path()]);
          };

          $rootScope.$on('$viewContentLoaded', track);
        }
])

.service('getElement', function() {
    var element = {
        value: 'default'
    };

    element.setValue = function(val) {
      this.value = val;
    };

    element.getValue = function() {
        return this.value;
    };

    return element;
})