(function () {
    'use strict';

    let app = angular.module('descripttab', []);

    app.directive('descriptTab', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/description-tab.html',
            controller: function () {
                console.log("description tab")
            }
        }
    })
})();