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

       $('.tab ul.tabs li a').click(function (g) {
         var tab = $(this).closest('.tab'),
           index = $(this).closest('li').index(),
           pieChart = $('.pie-chart g > g');

         tab.find('ul.tabs > li').removeClass('current');
         $(this).closest('li').addClass('current');
         pieChart.find('path').not('path:eq(' + index + ')').css('transform', 'translate(0,0)');
         if (index == 0) {
           pieChart.find('path:eq(' + index + ')').css('transform', 'translate(5px,-5px)');
         } else if (index == 1) {
           pieChart.find('path:eq(' + index + ')').css('transform', 'translate(3px,5px)');
         } else if (index == 2) {
           pieChart.find('path:eq(' + index + ')').css('transform', 'translate(-7px,6px)');
         } else if (index == 3) {
           pieChart.find('path:eq(' + index + ')').css('transform', 'translate(-12px,-6px)');
         } else if (index == 4) {
           pieChart.find('path:eq(' + index + ')').css('transform', 'translate(-3px,-14px)');
         } else if (index == 5) {
           pieChart.find('path:eq(' + index + ')').css('transform', 'translate(-7px,-11px)');
         } else {
           pieChart.find('path:eq(' + index + ')').css('transform', 'translate(-9px,-10px)');
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
