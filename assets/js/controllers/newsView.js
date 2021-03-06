angular.module('Earthly.controllers')

.controller('newsView', ['$scope', '$sce', '$rootScope', '$state', 'PostsByType', 'PostsByTypeAndSlug', '$stateParams', function ($scope, $sce, $rootScope, $state, PostsByType, PostsByTypeAndSlug, $stateParams) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'news';

    $scope.searchProjects = '';

    $scope.activeMenu = "recent";

    var postDate = 'acf.date';

    $scope.sortType = postDate;

    $scope.sortReverse = true;

    $scope.showSustainable = function(val) {
      return (val.acf.category == 'sustainable_investing');
    };

    $scope.showPersonal = function(val) {
      return (val.acf.category == 'personal_finance');
    };

    $scope.showPassive = function(val) {
      return (val.acf.category == 'passive_investing');
    };

    $scope.showFinancial = function(val) {
      return (val.acf.category == 'financial_planning');
    };

    $scope.showNews = function(val) {
      return (val.acf.category == 'news');
    };

    $scope.categoryText = function(item) {
      if (item.acf.category == 'sustainable_investing') {
        item.categoryHeader = "Sustainable Investing";
      }
    }

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

    PostsByType.getPostsByType('posts').then(function (response) {
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
        }
    });

    $scope.parseDateTimeString = function(timeString) {
      var date, months;
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      date = new Date(timeString);
      return months[date.getMonth()] + " " + (date.getDay()) + ", " + (date.getFullYear());
    };

    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('posts').query($stateParams);

    $scope.PostsByTypeAndSlug.$promise.then(function (response) {
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
