var configIncidence = function($routeProvider){
 
    $routeProvider.when("/home", {
        controller: "incidencesController",
        templateUrl: "views/home.html"
    }).when('/addIncidence', {
        templateUrl: 'views/addIncidence.html',
        controller: 'incidencesController'
      });
 
}
 
//creamos el modulo y le aplicamos la configuración
var Incidence = angular.module("Incidence", ["ngRoute","ngMaterial"]).config(configIncidence);