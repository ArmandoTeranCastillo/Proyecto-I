(function () {
    'use strict';

    let app = angular.module('reviewtab', []);

    app.directive('reviewTab', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/review-tab.html',
            controller: function () {
                console.log("review tab")
            }
        }
    })
})();