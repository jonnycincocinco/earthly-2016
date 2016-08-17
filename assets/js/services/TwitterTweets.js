angular.module('Earthly.services')

.factory('TwitterTweets', function ($http) {

    getTweets = function () {
        return $http.get(ajaxInfo.template_directory + '/social/tweets.json', { cache: true}).then(function (response) {
            return response;
        });
    },

    parseDateTimeString = function(timeString) {
      var date, months;
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      date = new Date(timeString);
      return months[date.getMonth()] + " " + (date.getDay()) + ", " + (date.getFullYear());
    };

    return {
        getTweets: getTweets
    };

});