angular.module('Earthly.services')

.factory('PostsByType', function ($http, $q) {

    var posts = null,
        lastType = null,

    getPostsByType = function (type) {
        if (posts === null || type !== lastType) {
            posts = $http.get(ajaxInfo.api_url + type + '?filter[posts_per_page]=-1', { cache: true}).then(function (response) {
                return response.data;
            });
            lastType = type;
            return posts;
        } else {
            var deferred = $q.defer();
            deferred.resolve(posts);
            return deferred.promise;
        }

    };

    return {
        getPostsByType: getPostsByType
    };

});
