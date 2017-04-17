angular.module('Earthly.controllers')

.controller('portfolioView', ['$scope', '$rootScope', '$state', 'PostsByType', '$location', '$anchorScroll', function ($scope, $rootScope, $state, PostsByType, $location, $anchorScroll) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'portfolio';

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();

    (function ($) {
       $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').hover(function () {
          if ($(this).closest('.tabs').hasClass('chart-traditional')) {
           $('.pie-chart-traditional').addClass('current');
           $('.pie-chart-sustainable').removeClass('current');
         } else {
           $('.pie-chart-sustainable').addClass('current');
           $('.pie-chart-traditional').removeClass('current');
         }
       });

       $('.tab ul.tabs li a').click(function (g) {
         var tab = $(this).closest('.tab'),
           index = $(this).closest('li').index(),
           pieChart1 = $('.pie-chart.current g > g');

         tab.find('ul.tabs > li').removeClass('current');
         $(this).closest('li').addClass('current');

            pieChart1.find('path').not('path:eq(' + index + ')').css('transform', 'translate(0,0)');
         if (index == 0) {
           if ($('.pie-chart-traditional').hasClass('current')) {
             pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(5px,-5px)');
           } else {
             pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(5px,-5px)');
           };
         } else if (index == 1) {
           if ($('.pie-chart-traditional').hasClass('current')) {
            pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(3px,5px)');
          } else {
            pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-10px,-5px)');
          };
         } else if (index == 2) {
           if ($('.pie-chart-traditional').hasClass('current')) {
            pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-7px,6px)');
          } else {
            pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-3px,-14px)');
          };
         } else if (index == 3) {
           if ($('.pie-chart-traditional').hasClass('current')) {
             pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-12px,-6px)');
           } else {
             pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-8px,11px)');
           };
         } else if (index == 4) {
           if ($('.pie-chart-traditional').hasClass('current')) {
             pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-9px,-10px)');
           } else {
             pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-23px,5px)');
           };
         } else if (index == 5) {
           pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-7px,-11px)');
         } else {
           pieChart1.find('path:eq(' + index + ')').css('transform', 'translate(-3px,-14px)');
         };

         tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
         tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

         g.preventDefault();
       } );

     })(jQuery);


  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
 }



}]);
