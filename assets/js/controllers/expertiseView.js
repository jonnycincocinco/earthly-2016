angular.module('Earthly.controllers')

.directive('imageonload', function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        element.bind('load', function() {
            scope.$apply(attrs.imageonload);
        });
    }
};
})

.directive('videoload', function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        element.bind('loadeddata', function() {
            scope.$apply(attrs.videoload);
        });
    }
};
})

.controller('expertiseView',['getElement', '$window', '$scope', '$rootScope', '$state', '$location', '$stateParams', 'PostsBySlug', '$sce', '$timeout', 'Socialshare', function (getElement, $window, $scope, $rootScope, $state, $location, $stateParams, PostsBySlug, $sce, $timeout, Socialshare){
    'use strict';

    $scope.loadedContent = 0;

    $scope.contentLoaded = function(response) {
        //console.log('loaded', response);
        //console.log(this.$parent);

        $scope.loadedContent ++;
    };


    $rootScope.$state = $state;

    $rootScope.bodylayout = 'expertise';
    $scope.posts = [];


    $scope.PostsBySlug = PostsBySlug.getPostsBySlug('posts').query($stateParams);

//     =


    $scope.PostsBySlug.$promise.then(function (response) {
      $scope.posts = response;
      var posts = $scope.posts;
      var options = {
        weekday: "long", year: "numeric", month: "long",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      for (var i = 0; i < posts.length; i++) {
        var dates = posts[i].acf.date.toLocaleString();
        var year        = dates.substring(0,4);
        var month       = dates.substring(4,6);
        var day         = dates.substring(6,8);
        var date        = new Date(year, month-1, day);
        date = date.toLocaleTimeString("en-us", options);
        date = date.substring(date.indexOf(",") + 1);
        date = date.split(',')
        date.splice(-1, 1)
        date = date.join(',');
        posts[i].newDate = date;
        $scope.cleanExcerpt = posts[i].excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "");
        console.log($scope.cleanExcerpt);
      }
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
      //console.log('close clicked', $rootScope.$state.$current.path[0].url.prefix);
    };

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();


}]);
