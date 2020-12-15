(function () {
    'use strict';

    let app = angular.module('product', []);

    app.controller('Product', ['$scope', '$state', '$stateParams', '$http', function ($scope, $state, $stateParams, $http) { //StatePaarams es para obtener el identificador de cada producto en el json como si fuera un parámetro del estado
        let product = this

        product._id = $stateParams._id
        product.detail = {}
        product.reviews = []
        product.sumStars = 0
        product.avgStars = 0

        //Funciones para seleccionar el tab, y ocultar o mostrar datos
        product.current = 0
        product.setCurrent = function (i) {
            product.current = i || 0
        }

        product.isSet = function (i) {
            return i === product.current
        }

        $http.get("./dummy/products.json").then(function (data) { //http es una función promesa, regresa un objeto con propiedades que deben resolverse de manera síncrona. Si se puede resolver, regresar la información
            product.products = data.data.gems //product.products va almacenar los datos del json

            product.detail = product.products.find(p => p._id === product._id) //Find regresa un objeto dentro de un arreglo
            console.log("detail", product.detail)

            product.reviews = product.detail.reviews
            product.sumStars = product.reviews.map(item => item.stars).reduce((prev, next) => prev + next) //product.sumStars y map nos darán los datos en un arreglo diferente. Reduce es para hacer la suma de las estrellas

            product.avgStars = product.sumStars / product.products.length //Obtener el promedio del numero de estrellas


        }) //Traer datos dummy
    }])
})();