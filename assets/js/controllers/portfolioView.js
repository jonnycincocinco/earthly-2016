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

}]);
