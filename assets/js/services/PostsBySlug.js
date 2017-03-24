angular.module('Earthly.services')

.factory('PostsBySlug', function ($resource) {

    getPostsBySlug = function (type) {
        return $resource('index.php/' + ajaxInfo.api_url + type + '?slug=:slug',{
        slug:'@slug'
        }, { cache: true});
    };

    return {
        getPostsBySlug: getPostsBySlug
    };

});
