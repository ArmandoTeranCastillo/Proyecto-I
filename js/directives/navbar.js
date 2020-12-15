(function() {
   

    let app = angular.module('navbar', []);

    app.directive("navbar", function(){
        return{
            restrict: "E" ,//La directiva será de tipo elemento nuevo
            templateUrl: "partials/navbar.html",
            controller: function(){
                console.log("navbar")
            },
            controllerAs: "nav"
        }
    })
})();