angular.module('Earthly.controllers')
.controller('socialView', ['getElement', '$scope', '$rootScope',  '$window', function (getElement, $scope, $rootScope, $window) {
    'use strict';

     $scope.clickedSocial = function(type){
      //getElement.setValue('email');
      //console.log('social clicked: ' + type);
      $window.ga('send', 'pageview', {page: type });
    }

}]);