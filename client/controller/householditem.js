var myApp = angular.module('myApp');

myApp.controller('householditemcontroller',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams){
    console.log('householditemcontroller loaded');
    $scope.getHouseholdItems = function(){
    	$http.get('/api/householditems').success(function(response){
    		$scope.householditems = response;
    	})
    }
}]);