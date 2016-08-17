angular.module('Earthly.services')

.factory('Posts', function ($resource) {
    return $resource(ajaxInfo.api_url + 'posts/:ID',{
        ID:'@id'
    });
});