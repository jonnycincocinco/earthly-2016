angular.module('Earthly.controllers')

.controller('earthlyDnaView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'earthy-dna';

    $scope.getRetina = function (imageSrc) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '@2x.jpg');
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        return newPath2;
      }
    };

    $scope.getImageBreakpointSrc = function (imageSrc, breakpoint) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '-' + breakpoint + '.jpg');
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        return newPath2;
      }
    };

}]);
