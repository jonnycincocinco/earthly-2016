angular.module('Earthly.controllers')

.directive('imageonload', function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        element.bind('load', function() {
            scope.$apply(attrs.imageonload);
        });
    }
};
})

.directive('videoload', function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        element.bind('loadeddata', function() {
            scope.$apply(attrs.videoload);
        });
    }
};
})

.controller('expertiseView',['getElement', '$window', '$scope', '$rootScope', '$state', '$location', '$stateParams', 'PostsByTypeAndSlug', '$sce', '$timeout', function (getElement, $window, $scope, $rootScope, $state, $location, $stateParams, PostsByTypeAndSlug, $sce, $timeout){
    'use strict';

    $scope.loadedContent = 0;

    $scope.contentLoaded = function(response) {
        //console.log('loaded', response);
        //console.log(this.$parent);

        $scope.loadedContent ++;
    };

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'expertise';
    $scope.posts = [];


    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('expertise').query($stateParams);

    // PostsByTypeAndSlug.getPostsByTypeAndSlug('expertise').query($stateParams,function(response){
    //     $scope.posts = response;
    // });

    $scope.PostsByTypeAndSlug.$promise.then(function (response) {
      $scope.posts = response;
      //console.log('ok promise loaded');
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
      //console.log('close clicked', $rootScope.$state.$current.path[0].url.prefix);
    };

    $scope.getVideoSrc = function (videoSrc) {
      if (typeof videoSrc === 'string') {
        var newPath = $sce.trustAsResourceUrl(videoSrc);
        return newPath;
      }
    };

    $scope.getVideoTypeSrc = function (videoSrc, fileType) {
      if (typeof videoSrc === 'string') {
        var newPath = videoSrc.replace('.mp4', '.' + fileType);
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        var cache = '?v=14&cache=' + new Date().getTime() + '';
        //'?v=14&cache=' + new Date().getTime()
        return newPath2;
      }
    };

    $scope.getRetina = function (imageSrc) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '@2x.jpg');
        return newPath;
      }
    };

    $scope.getImageBreakpointSrc = function (imageSrc, breakpoint) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '-' + breakpoint + '.jpg');
        return newPath;
      }
    };


    $scope.$watch('expertiseView.getImageBreakpointSrc', function(){
        //alert('expertiseView loaded');
    });


    $scope.$watch('getImageBreakpointSrc', function(){
        //alert('loaded');
    });

    $scope.$watch('ngSrc', function() {
           //alert('NGSRC');
      });



    // Inline for now viewContentLoaded
    $scope.$watch('viewContentLoaded', function(event) {
      //$('.expertise--asset-wrapper').addClass('hide');
      // $('.expertise--asset').each(function (index) {
      //     console.log('index', index);
      //     if($scope.loadedContent != index-1 ){
      //         return;
      //     }
      // });

      $timeout(function() {


        var hash = $location.$$hash;
        if (hash) {
          var topScroll = $('#' + hash + '').offset().top;
          $('html, body').animate({
              scrollTop: topScroll
          }, 350);
        }

         var w =  $(window).width();
        // var h =  $(window).height();

           var captionFadeContainer = $('.expertise--desc-body');

           var _getVisibleAsset = function getVisibleAsset() {

        //     //console.log('h: ' + h + ' w: ' + w);

             $('.expertise--asset').each(function (index) {
                    // $('.expertise--asset').each(function (index) {
                    //     console.log('index', index);
                    //     if($scope.loadedContent != index-1 ){
                    //         return;
                    //     }else{
                    //       // /_getVisibleAsset();
                    //     }
                    // });
                  $scope.$watch('ngSrc', function(element) {
                      //console.log('NGSRC', element );
                  });

               var that = $(this),
                   windowScrollTop     = $(window).scrollTop(),
                   elementOffset = that.offset().top,
                   elementHeight = $(this).height(),
                   distance      = (elementOffset - windowScrollTop),
                   assetOffset   = 100;

        //           //console.log('windowScrollTop', windowScrollTop);
        //           //console.log('elementOffset', elementOffset);
        //           //console.log('elementHeight', elementHeight);
        //           //console.log('distance', distance);
        //           //console.log('assetOffset', assetOffset);

        //           var currentH = h + 300;

        //           if(currentH > w){
        //             assetOffset = 200;
        //             $('.expertise--asset-wrapper').css('marginBottom', '250px');
        //           }


                   if (w < 1530){
                      assetOffset = 500;
                   }

                   if (w < 1200){
                      assetOffset = 400;
                   }

                   if (w < 1100){
                      assetOffset = 500;
                   }

                   if (w < 768) {
                     assetOffset = 300;
                   }

               var captionPara = that.find('.expertise--desc .inner-container p').html();

               //console.log('distance', distance);
               //console.log('assetOffset' , assetOffset);
               //console.log('elementHeight',elementHeight)
               //console.log('(assetOffset - elementHeight)', (assetOffset - elementHeight)):
               //console.log('captionPara', captionPara );

              if (distance <= assetOffset && distance > (assetOffset - elementHeight) && captionPara !== "") {
                that.addClass('active');

                var captionContent = that.find('.expertise--desc .inner-container');

                var caption = that.find('.expertise--desc .inner-container').html();
                captionFadeContainer.html(caption);



              } else {
                that.removeClass('active');
                    //console.log('caption ' + caption);
                //console.log('captionContent', captionContent);
                //$window.ga('send', 'pageview', {page: $location.url()});
              }

             });
           };

          _getVisibleAsset();

           $(window).bind("scroll", function() {
             _getVisibleAsset();;
           });

      }, 800);
    });

}]);
