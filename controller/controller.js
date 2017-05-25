var app=angular.module('myApp',[]);

app.controller('myController', ['$scope','productService', function($scope,productService){
	
	$scope.productSer=productService.productDetails();
}])

