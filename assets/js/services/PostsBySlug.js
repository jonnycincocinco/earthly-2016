angular.module('Earthly.services')

.factory('PostsbySlug', function ($resource) {
    return $resource(ajaxInfo.api_url + 'posts/?filter[name]=:slug',{
        slug:'@slug'
    }, { cache: true});
});