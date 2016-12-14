angular.module('Earthly.controllers')

.controller('newsView', ['$sce', '$scope', '$rootScope', '$state', 'PostsByType', 'PostsByTypeAndSlug', '$stateParams', function ($sce, $scope, $rootScope, $state, PostsByType, PostsByTypeAndSlug, $stateParams) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'news';

    $scope.searchProjects = '';

    $scope.highlight = function(text, search) {
    if (!search) {
        return $sce.trustAsHtml(text);
    }
      return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));
    };

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();


    PostsByType.getPostsByType('expertise').then(function (response) {
        $scope.posts = response;
    });

    $scope.parseDateTimeString = function(timeString) {
      var date, months;
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      date = new Date(timeString);
      return months[date.getMonth()] + " " + (date.getDay()) + ", " + (date.getFullYear());
    };

    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('expertise').query($stateParams);

    $scope.PostsByTypeAndSlug.$promise.then(function (response) {
      $scope.posts = response;
    });

//    console.log($scope.post);


    $scope.clickedNext = function(){
      getElement.setValue('next');
      //console.log('previous clicked', $location.$$path);
    }

    $scope.clickedPrevious = function(){
      getElement.setValue('previous');
      //console.log('previous clicked', $location.$$path);
    }

    $scope.trackViewGA = function(){
        ga('send', 'pageview', 'Hero View Click');
    };

    // input comma-adder
      $('input.number').keyup(function(event) {
      if(event.which >= 37 && event.which <= 40) return;
      $(this).val(function(index, value) {
        return value
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        ;
      });
    });

}])
