(function() {
   

   let app = angular.module('products', []);

   app.controller('Products', ['$scope', '$state', '$http', function($scope, $state, $http){
    let store = this;

    //Arreglos para almacenar elementos traidos del http
    store.products = [] 
    store.reviews = []
    store.sumStars = 0
    store.avgStars = 0
    $http.get("./dummy/products.json").then(function(data){ //http es una función promesa, regresa un objeto con propiedades que deben resolverse de manera síncrona. Si se puede resolver, regresar la información
       console.info(data)
       store.products = data.data.gems //store.products va almacenar los datos del json
       //store.sumStars = store.products.reviews.map(item =>item.stars).reduce((prev, next)=> prev+ next) //Store.sumStars y map nos darán los datos en un arreglo diferente. Reduce es para hacer la suma de las estrellas
       //store.avgStars = store.sumStars / store.products.length //Obtener el promedio del numero de estrellas
    }) //Traer datos dummy

    store.go = function(_id){
       console.log(_id)
       $state.go('app.product', {
          _id:_id
       })
    }
   }])
})();