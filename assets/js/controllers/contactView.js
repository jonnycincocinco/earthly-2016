angular.module('Earthly.controllers')

.controller('contactView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', '$window', function (getElement, $scope, $rootScope, $state, PostsByType, $window) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'contact';

    PostsByType.getPostsByType('contact').then(function (response) {
        $scope.posts = response;
    });

    $scope.clickedEmail = function(type){
      //getElement.setValue('email');
      //console.log('email clicked: ' + type);
      $window.ga('send', 'pageview', {page: type });
    }

    $(function() {

        function initMap() {

            var container = document.getElementById('map');
            var mapOptions = {
              zoom: 17,
              center: {lat: 37.795146, lng: -122.401266},
              disableDefaultUI: true,
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
                placeId: 'ChIJLzyffImAhYARS7HpKg0leKw'
            }, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
                google.maps.event.addListener(map,'center_changed',function() {
                  window.setTimeout(function() {
                    map.panTo(marker.getPosition());
                  }, 400);
                });
            }


          });
        }

        initMap();
    });

}]);
