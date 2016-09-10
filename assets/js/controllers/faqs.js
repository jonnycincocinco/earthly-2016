angular.module('Earthly.controllers')

.controller('faqsView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    $(".tabs-menu .tab-item").click(function() {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).attr("data-link");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();

    //    $( "html, body" ).animate({scrollTop:topScroll}, 6000, 'swing');

    });

      var NavController = {
      $trigger: $('.js-nav-toggle'), // these trigger open/close
      // Animation settings
      animate: {
        duration: 0.3,

        visible: {
          display: 'block',
          autoAlpha: 1,
          height: 0 // this is calculated correctly later
        },

        hidden: {
          display: 'none',
          autoAlpha: 0,
          height: 0
        }
      },
      attrs: {
        id: 'data-nav-id'
      },
      classes: {
        active: 'is-active'
      },

      /**
       * Kick things off
       */
      init: function() {
        this.bindUI();
      },

      /**
       * Watch for events
       */
      bindUI: function() {
        this.$trigger.on('click', this.handleClick);
      },

      /**
       * Show/hide nav based on click
       * @param  {Event} e
       */
      handleClick: function(e) {
        var _ = NavController,
            $trigger = $(this),
            navId = $trigger.attr(_.attrs.id),
            $nav = $('#' + navId);

        e.preventDefault();

        $nav.toggleClass(_.classes.active);

        // Fetch correct height to animate to and from
        _.animate.visible.height = "auto";

        if(_.isNavOpen($nav)) {
          $trigger.addClass(_.classes.active);
          TweenLite.fromTo($nav, _.animate.duration, _.animate.hidden, _.animate.visible);
        } else {
          $trigger.removeClass(_.classes.active);
          TweenLite.fromTo($nav, _.animate.duration, _.animate.visible, _.animate.hidden);
        }
      },

      /**
       * Check if given nav is open/closed
       * @param  {DOM Element}  $nav
       * @return {Boolean}
       */
      isNavOpen: function($nav) {
        return $nav.hasClass(this.classes.active);
      }
    };

    NavController.init();

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'faqs';


    $scope.getRetina = function (imageSrc) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '@2x.jpg');
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        return newPath2;
      }
    };

    $scope.getImageBreakpointSrc = function (imageSrc, breakpoint) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '-' + breakpoint + '.jpg');
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        return newPath2;
      }
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
