angular.module('Earthly.controllers')

.controller('aboutUsView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', function (getElement, $scope, $rootScope, $state, PostsByType) {
    'use strict';

    $rootScope.bodylayout = 'about';

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.turbine-main', .5, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');
        tl1.to('.rotor-main', 1, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');
        tl1.to('.rotor-left', 1, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');
        tl1.to('.rotor-right', 1, { opacity: 1, ease: Power0.easeNone  }, 'firstFrame');

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

        tl1.to('.rotor-main', 20, { rotation: 360, ease: Power0.easeNone,repeat: -1  }, 'firstFrame');
        tl1.to('.rotor-left', 19, { rotation: 360, ease: Power0.easeNone,repeat: -1  }, 'firstFrame');
        tl1.to('.rotor-right', 22, { rotation: 360, ease: Power0.easeNone,repeat: -1  }, 'firstFrame');



    };

    var tl2 = new TimelineMax({repeat:-1});
    var tl3 = new TimelineMax({repeat:-1,delay: .5});
    var tl4 = new TimelineMax({repeat:-1,delay: .8});

    function cloudSmall() {
      tl2.to('.cloud-small', 1, {opacity: '.3', left:"10", ease:Power0.easeNone});
      tl2.to('.cloud-small', 65, {left:"698", ease:Power0.easeNone});
      tl2.to('.cloud-small', 1, {opacity: '0', left:"700", ease:Power0.easeNone});
      tl2.to('.cloud-small', .1, {left:"0", ease:Power0.easeNone});
    }

    function cloudMedium() {
      tl3.to('.cloud-medium', 1, {opacity: '.4', left:"12", ease:Power0.easeNone});
      tl3.to('.cloud-medium', 72, {left:"698", ease:Power0.easeNone});
      tl3.to('.cloud-medium', 1, {opacity: '0', left:"700", ease:Power0.easeNone});
      tl3.to('.cloud-medium', .1, {left:"0", ease:Power0.easeNone});
    }

    function cloudLarge() {
      tl4.to('.cloud-large', 1, {opacity: '.2', left:"15", ease:Power0.easeNone});
      tl4.to('.cloud-large', 48, {left:"698", ease:Power0.easeNone});
      tl4.to('.cloud-large', 1, {opacity: '0', left:"700", ease:Power0.easeNone});
      tl4.to('.cloud-large', .1, {left:"0", ease:Power0.easeNone});
    }

    startAnimations();
    cloudSmall();
    cloudMedium();
    cloudLarge();

    //  window.sr = ScrollReveal().reveal('.container, .site-footer');
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
