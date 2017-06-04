angular.module('Earthly.controllers')

.controller('contactView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', '$window', function (getElement, $scope, $rootScope, $state, PostsByType, $window) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'contact';


    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();

    $scope.clickedEmail = function(type){
      //getElement.setValue('email');
      //console.log('email clicked: ' + type);
      $window.ga('send', 'pageview', {page: type });
    }

    $(function() {

      function initMap() {

          var container = document.getElementById('map');
          var mapOptions = {
            zoom: 14,
            center: {lat: 37.8775362, lng: -122.464141},
            disableDefaultUI: false,
            styles: [{
              stylers: [{
                saturation: -100
              }]
            }]
          };

          var map = new google.maps.Map(container, mapOptions);

          var infowindow = new google.maps.InfoWindow();
          var service = new google.maps.places.PlacesService(map);

          service.getDetails({
              placeId: 'ChIJx-IyN4mEhYARauS6nA7Vg-Q'
          }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                  var marker = new google.maps.Marker({
                  map: map,
                  position: place.geometry.location
              });
              google.maps.event.addListener(marker, 'click', function() {
          //        infowindow.setContent(place.name);
          //        infowindow.open(map, this);
              });
              // google.maps.event.addListener(map,'center_changed',function() {
              //   window.setTimeout(function() {
              //     map.panTo(marker.getPosition());
              //   }, 400);
              // });
          }


        });
      }

      initMap();
  });



}]);
