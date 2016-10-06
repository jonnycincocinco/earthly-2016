angular.module('Earthly.controllers')

.controller('feesView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'feesView';

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();

    window.sr = ScrollReveal().reveal('.section-strip');

    var homePage = $(".inner-hero");
    var vid = $(".applet-video")[0];
    var graph = $("#graph");
    var replay = $("#replay-button");
    vid.currentTime = '0';
    replay.removeClass('show');

      if (homePage) {
        $(document).scroll(function(){
          if($(document).scrollTop() + $(window).height() > $(".applet").offset().top + 800){

            if (vid.currentTime === 0) {
              vid.play();
              replay.addClass('show');
            }
            $("#replay-button").click(function(){
              vid.currentTime = '0';
              vid.play();
          //    graph.addClass('show');
            })
        }
        });

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

}]);
