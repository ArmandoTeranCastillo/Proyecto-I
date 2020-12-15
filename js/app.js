(function () {
    "use strict";

    let app = angular.module("fStore", [
        "ui.router",
        "ui.router.state.events",
        "landing",
        "navbar",
        "footer",
        "app",
        "products",
        "product",
        "filters",
        "gallery",
        "panels",
        "specstab",
        "reviewtab",
        "descripttab",
        "productslist",
        "ad",
    ]);

    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state("landing", {
                    url: "/landing",
                    templateUrl: "partials/landing.html",
                    controller: "Landing",
                })
                .state("app", {
                    //Estado que se comportará como estado "padre"
                    url: "/app",
                    abstract: true,
                    templateUrl: "partials/main-panel.html",
                    controller: "App",
                })
                //Estados que se comportarán como los "hijos" del estado "padre"
                .state("app.products", {
                    url: "./products",
                    views: {
                        content: {
                            templateUrl: "partials/products/products.html",
                            controller: "Products",
                        },
                    },
                })
                .state("app.product", {
                    url: "./products/:_id",
                    views: {
                        content: {
                            templateUrl: "partials/products/product.html",
                            controller: "Product",
                        },
                    },
                });

            $urlRouterProvider.otherwise(
                "/landing"
            ); /*Si no hay otra dirección por visualizar,
        mostrar la dirección del estado landing */
            $locationProvider.html5Mode(false); //No permitir que Html5 maneje los estados, Angular es  quien ahora se encargará de eso  */
        },
    ]);
})();
