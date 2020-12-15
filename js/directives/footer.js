(function() {
   

    let app = angular.module('footer', []);

    app.directive("footerb", function(){
        return{
            restrict: "E" ,//La directiva será de tipo elemento nuevo
            templateUrl: "partials/footer.html",
            controller: function(){
                console.log("footer")
            },
            controllerAs: "footer"
        }
    })
})();