angular.module('Earthly.controllers')

.controller('securityView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'securityView';

    PostsByType.getPostsByType('work').then(function (response) {
        $scope.posts = response;
    });

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