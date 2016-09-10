angular.module('Earthly.controllers')

.controller('whatWeDoView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', function (getElement, $scope, $rootScope, $state, PostsByType) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'what-we-do';

    PostsByType.getPostsByType('what-we-do').then(function (response) {
        $scope.posts = response;
    });

    $scope.clickedNext = function(){
      getElement.setValue('next');
      //console.log('previous clicked', $location.$$path);
    }

    $scope.clickedPrevious = function(){
      getElement.setValue('previous');
      //console.log('previous clicked', $location.$$path);
    }

    $scope.clickedClose = function(){
      getElement.setValue('close');
      //console.log('close clicked');
    };

    $scope.slickConfig = {
        autoplay: false,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipeToSlide: true,
        infinite: false,
        dots: false,
        prevArrow: '.carousel-left',
        nextArrow: '.carousel-right',
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
                // before...
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
                // after...
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true
                }
            }
        ]
    };

}]);
