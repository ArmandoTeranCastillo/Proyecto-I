(function () {
    'use strict';

    let app = angular.module('ad', []);

    app.directive("adlist", function () {
        return {
            restrict: "E",//La directiva será de tipo elemento nuevo
            templateUrl: "partials/ad-list.html",
            controller: function () {
                console.log("ad")
            }

        }
    })
})();