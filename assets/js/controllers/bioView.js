angular.module('Earthly.controllers')

.controller('bioView',['getElement', '$scope', '$rootScope', '$state', '$stateParams', 'PostsByTypeAndSlug', function (getElement, $scope, $rootScope, $state, $stateParams, PostsByTypeAndSlug){
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'bio';  

    PostsByTypeAndSlug.getPostsByTypeAndSlug('bio').query($stateParams,function(response){
        $scope.posts = response;
    });

    $scope.clickedNext = function(){
      getElement.setValue('next');
      //console.log('previous clicked', $location.$$path);
    }

    $scope.clickedPrevious = function(){
      getElement.setValue('previous');
      //console.log('previous clicked', $location.$$path);
    }


    $scope.clickedClose = function(){
      getElement.setValue('close');
    };

    $scope.getRetina = function (imageSrc) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '@2x.jpg')
        return newPath;
      }
    };

    $scope.getImageBreakpointSrc = function (imageSrc, breakpoint) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '-' + breakpoint + '.jpg');
        return newPath;
      }
    };

}]);
