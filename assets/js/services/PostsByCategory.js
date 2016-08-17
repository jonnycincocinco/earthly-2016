angular.module('Earthly.services')

.factory('PostsbyCategory', function ($http, $q) {

    var posts = null,
        lastCategory = null,

    getPostsbyCategory = function (category) {
        if (posts === null || category !== lastCategory) {
            posts = $http.get(ajaxInfo.api_url + 'posts/?filter[category_name]=' + category, { cache: true}).then(function (response) {
                return response.data;
            });
            lastCategory = category;
            return posts;
        } else {
            var deferred = $q.defer();
            deferred.resolve(posts);
            return deferred.promise;
        }

    };

    return {
        getPostsbyCategory: getPostsbyCategory
    };

});