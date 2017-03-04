var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
    	controller:'householditemcontroller',
    	templateUrl:'views/householditem.html'
    })
    .when('/api/householditems',{
    	controller:'householditemcontroller',
    	templateUrl:'views/householditem.html'
    })
    .when('/householditems/details/:id',{
    	controller:'householditemcontroller',
    	templateUrl:'views/details_householditem.html'
    })
    .when('/householditems/add',{
    	controller:'householditemcontroller',
    	templateUrl:'views/add_householditem.html'
    })
    .otherwise({
    	redirectTo:'/'
    })
});