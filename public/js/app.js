angular.module("e-shop", ['ngRoute', 'ui.bootstrap'])
    .config(config)

function config($routeProvider) {
    
    $routeProvider
        .when("/",{
            templateUrl: "Partials/home.html",
            controller:"homeCtrl",
            controllerAs:"home"
        })
        .when("/admin",{
            templateUrl:"Partials/login.html",
            controller:"loginCtrl",
            controllerAs:"login"

        })
    console.log("config")
}