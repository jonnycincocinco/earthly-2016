angular.module('Earthly.controllers')

.controller('homeView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'home';

    PostsByType.getPostsByType('home').then(function (response) {
        $scope.posts = response;
    });

    $scope.getVideoSrc = function (videoSrc) {
      return $sce.trustAsResourceUrl(videoSrc);
    };


    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.turbine-main', .5, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');
        tl1.to('.rotor-main', 1, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');
        tl1.to('.rotor-left', 1, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');
        tl1.to('.rotor-right', 1, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

        tl1.to('.rotor-main', 4, { rotation: 360, ease: Power0.easeNone,repeat: -1  }, 'firstFrame');
        tl1.to('.rotor-left', 3, { rotation: 360, ease: Power0.easeNone,repeat: -1  }, 'firstFrame');
        tl1.to('.rotor-right', 5, { rotation: 360, ease: Power0.easeNone,repeat: -1  }, 'firstFrame');



    };

    var tl2 = new TimelineMax({repeat:-1});
    var tl3 = new TimelineMax({repeat:-1,delay: .5});
    var tl4 = new TimelineMax({repeat:-1,delay: .8});

    function cloudSmall() {
      tl2.to('.cloud-small', 1, {opacity: '1', left:"68", ease:Linear.easeNone});
      tl2.to('.cloud-small', 12, {left:"648", ease:Linear.easeNone});
      tl2.to('.cloud-small', 1, {opacity: '0', left:"700", ease:Linear.easeNone});
      tl2.to('.cloud-small', .1, {left:"0", ease:Linear.easeNone});
    }

    function cloudMedium() {
      tl3.to('.cloud-medium', 1, {opacity: '1', left:"48", ease:Linear.easeNone});
      tl3.to('.cloud-medium', 13, {left:"648", ease:Linear.easeNone});
      tl3.to('.cloud-medium', 1, {opacity: '0', left:"700", ease:Linear.easeNone});
      tl3.to('.cloud-medium', .1, {left:"0", ease:Linear.easeNone});
    }

    function cloudLarge() {
      tl4.to('.cloud-large', 1, {opacity: '1', left:"38", ease:Linear.easeNone});
      tl4.to('.cloud-large', 14, {left:"648", ease:Linear.easeNone});
      tl4.to('.cloud-large', 1, {opacity: '0', left:"700", ease:Linear.easeNone});
      tl4.to('.cloud-large', .1, {left:"0", ease:Linear.easeNone});
    }

    startAnimations();
    cloudSmall();
    cloudMedium();
    cloudLarge();

    //CAROUSEL

    (function() {
      var rotate, timeline;

      rotate = function() {
        return $('.carousel-cards__item:first-child').fadeOut(400, 'swing', function() {
          return $('.carousel-cards__item:first-child').appendTo('.carousel-cards').hide();
        }).fadeIn(400, 'swing');
      };

      timeline = setInterval(rotate, 2300);

      $('.carousel-cards').hover(function() {
        return clearInterval(timeline);
      });

      $('.carousel-cards__item').click(function() {
        return rotate();
      });

    }).call(this);

    //Applet Show on Scroll

    var homePage = $(".page-home--hero");
      if (homePage) {
        $(document).scroll(function(){
        if($(document).scrollTop() + $(window).height() > $(".applet").offset().top + 400){
            var vid = $(".applet-video")[0];
            if (vid.currentTime === 0) {
              vid.play();
            }
        }
        });
      };

}]);
