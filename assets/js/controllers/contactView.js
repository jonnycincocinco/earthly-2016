angular.module('Earthly.controllers')

.controller('contactView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', '$window', function (getElement, $scope, $rootScope, $state, PostsByType, $window) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'contact';

    PostsByType.getPostsByType('contact').then(function (response) {
        $scope.posts = response;
    });

    $('#contactform').submit(function(event) {
      preventDefault();
    });
    var contactform = $('#contactform');
    var formresult = $('#formresult');
    var formdata = $(contactform).serialize();
    $.ajax({
    type: 'GET',
    url: 'http://erff.dev:8888/wp-content/themes/earthly-2016/contact.php',
    data: formdata,
    success:function(response) {
    $(formresult).removeClass();
    $(formresult).addClass('alert alert-success');
    $(formresult).html(response);
    },
    error:function(data) {
    $(formresult).removeClass();
    $(formresult).addClass('alert alert-warning');
    $(formresult).html(data.responseText);
    }

    });

    $scope.clickedEmail = function(type){
      //getElement.setValue('email');
      //console.log('email clicked: ' + type);
      $window.ga('send', 'pageview', {page: type });
    }



}]);
