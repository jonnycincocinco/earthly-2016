angular.module('Earthly.controllers')

.controller('ourWorkProjectView',['getElement', '$window', '$location', '$scope', '$rootScope', '$state', '$stateParams', 'PostsByTypeAndSlug', '$sce', function (getElement, $window, $location, $scope, $rootScope, $state, $stateParams, PostsByTypeAndSlug, $sce){
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'our-work-projects';

    PostsByTypeAndSlug.getPostsByTypeAndSlug('work').query($stateParams,function(response){
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

    $scope.getVideoSrc = function (videoSrc) {
      if (typeof videoSrc === 'string') {
        var newPath = $sce.trustAsResourceUrl(videoSrc);
        return newPath;
      }
    };

    $scope.getVideoTypeSrc = function (videoSrc, fileType) {
      if (typeof videoSrc === 'string') {
        var newPath = videoSrc.replace('.mp4', '.' + fileType);
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        return newPath2;
      }
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

    $scope.previousPost = function() {

    };

}]);
