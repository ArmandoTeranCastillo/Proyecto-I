(function () {
    'use strict';

    let app = angular.module('productslist', []);

    app.directive("productsList", function () {
        return {
            restrict: "E",//La directiva será de tipo elemento nuevo
            templateUrl: "partials/products-list.html",
            controller: function () {
                console.log("productsl")
            }

        }
    })
})();