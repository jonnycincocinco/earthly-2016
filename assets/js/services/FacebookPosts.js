angular.module('Earthly.services')

.factory('FacebookPosts', function ($http) {

    getPosts = function () {
        return $http.get(ajaxInfo.template_directory + '/social/facebook_feed.php', { cache: true}).then(function (response) {
            return response;
        });
    };

    return {
        getPosts: getPosts
    };

});
