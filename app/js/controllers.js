var app = angular.module('myApp', ['ngResource'])

app.directive ("superman", function () {
	return {
		restrict: "E",
		template: '<div>Here I am </div>'
	}
})

/* Controllers */

function ItemListCtrl($scope, $http, $resource) {
		
		

			$scope.useResource = function () {
				delete $http.defaults.headers.common['X-Requested-With'];
				
				$http({url: 'http://api1.asos.com/productlisting/category/6993/1/AlphaDescending/en_API/GBP?api_key=qwc2m87c54p9c2fusd73fecd', method: "GET"
				
				}).success(function(data, status, headers, config) {
					$scope.items = [data];
				}).error(function(data, status, headers, config){
					$scope.status = status;
				})
		      
			}
	
}

ItemListCtrl.$inject = ['$scope', '$http', '$resource'];


function MyCtrl1() {
	
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
