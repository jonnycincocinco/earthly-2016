angular.module('Earthly.controllers')

.controller('newsView', ['$scope', '$rootScope', '$state', 'PostsByType', 'FacebookPosts', 'TwitterTweets', function ($scope, $rootScope, $state, PostsByType, FacebookPosts, TwitterTweets) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'news';

    PostsByType.getPostsByType('news').then(function (response) {
        $scope.posts = response;
    });

    TwitterTweets.getTweets().then(function (response) {
        $scope.tweets = response.data.tweets;
    });

    FacebookPosts.getPosts().then(function (response) {
        $scope.fbposts = response.data.data;
    });

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

    $scope.parseDateTimeString = function(timeString) {
      var date, months;
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      date = new Date(timeString);
      return months[date.getMonth()] + " " + (date.getDay()) + ", " + (date.getFullYear());
    };

    $scope.trackViewGA = function(){
        console.log('Hero View Click');
        //$window._gaq.push(['_trackPageview', 'view News']);
        ga('send', 'pageview', 'Hero View Click');
      //   ga('send', {
      //     hitType: 'event',
      //     eventCategory: 'News',
      //     //eventAction: 'play',
      //     eventLabel: 'Main news'
      // });
    };

}])
.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')'
            });
        });
    };
});
