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

  //  window.sr = ScrollReveal().reveal('.bg-strip, .section-strip, .site-footer');

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
 }

 (function ($) {
 		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

 		$('.tab ul.tabs li a').click(function (g) {
 			var tab = $(this).closest('.tab'),
 				index = $(this).closest('li').index();

 			tab.find('ul.tabs > li').removeClass('current');
 			$(this).closest('li').addClass('current');

 			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
 			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

 			g.preventDefault();
 		} );
 	})(jQuery);

}]);
